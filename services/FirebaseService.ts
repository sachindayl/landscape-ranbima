import {NuxtFireInstance} from "@nuxtjs/firebase";
import {LandscapeInterface} from "~/models/LandscapeInterface";
import {GrassInterface} from "~/models/GrassInterface";

const img = require('assets/8.jpg')

export class FirebaseService {
  private nuxtFire: NuxtFireInstance;

  constructor(nuxtFire: NuxtFireInstance) {
    this.nuxtFire = nuxtFire;
  }

  public async retrieveImageData(folderName: string) {
    try {
      const querySnapshot = await this.nuxtFire.firestore.collection("images").get({source: 'cache'});
      let imageNameList: string[] = []
      querySnapshot.forEach((doc) => {
          imageNameList = doc.get(folderName);
        }
      )
      const path = folderName !== 'gallery' && folderName !== 'product' ? `landscape/${folderName}` : folderName;
      return await Promise.all(imageNameList.map(async image => await this.nuxtFire.storage.ref(path).child(image).getDownloadURL()));
    } catch (e) {
      console.log(JSON.stringify(e))
      return Promise.reject(e)
    }
  }

  public async retrieveLandscapeData() {
    try {
      if (process.env.NODE_ENV === 'production') {
        let querySnapshot = await this.nuxtFire.firestore.collection("landscape").orderBy("id").get({source: 'cache'});
        let landscapeDataList: LandscapeInterface[] = []
        querySnapshot = querySnapshot.empty ? await this.nuxtFire.firestore.collection("landscape").orderBy("id").get({source: 'default'}) : querySnapshot;
        querySnapshot.forEach((doc) => {
            landscapeDataList.push({
              title: doc.get("title"),
              keyword: doc.get("keyword"),
              before: doc.get("before"),
              after: doc.get("after"),
            })
          }
        )

        return await Promise.all(landscapeDataList.map(async data => {
          return {
            title: data.title,
            keyword: data.keyword,
            before: await this.retrieveImage(`landscape/${data.keyword}`, data.before),
            after: await this.retrieveImage(`landscape/${data.keyword}`, data.after),
          }
        }))
      } else {
        return [
          {
            title: "Test title",
            keyword: "test",
            before: img,
            after: img,
          }
        ]
      }


    } catch (e) {
      console.log(JSON.stringify(e))
      return Promise.reject(e)
    }
  }

  public async retrieveImage(folderName: string, imageName: string): Promise<string> {
    const url = await this.nuxtFire.storage.ref(folderName).child(imageName).getDownloadURL();
    return url as string;
  }

  public async retrieveGrass() {
    try {
      let querySnapshot = await this.nuxtFire.firestore.collection("grass").get();
      let grassList: GrassInterface[] = []
      querySnapshot.forEach((doc) => {
          grassList.push({
            title: doc.get("title"),
            image: doc.get("image"),
          })
        }
      );
      return await Promise.all(grassList.map(async data => {
        return {
          title: data.title,
          image: await this.retrieveImage('grass', data.image),
        }
      }))
    } catch (e) {
      console.log(JSON.stringify(e))
      return Promise.reject(e)
    }

  }
}
