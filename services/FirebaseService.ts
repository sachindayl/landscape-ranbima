import {NuxtFireInstance} from "@nuxtjs/firebase";

export class FirebaseService {
  private nuxtFire: NuxtFireInstance;

  constructor(nuxtFire: NuxtFireInstance) {
    this.nuxtFire = nuxtFire;
  }

  public async retrieveImageData(folderName: string) {
    try {
      const querySnapshot = await this.nuxtFire.firestore.collection("images").get();
      let imageNameList: string[] = []
      querySnapshot.forEach((doc) => {
          imageNameList = doc.get(folderName);
        }
      )
      return await Promise.all(imageNameList.map(async image => await this.nuxtFire.storage.ref(folderName).child(image).getDownloadURL()));
    } catch (e) {
      console.log(JSON.stringify(e))
      return Promise.reject(e)
    }

  }

}
