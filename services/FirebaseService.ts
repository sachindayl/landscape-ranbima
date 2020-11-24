import {NuxtFireInstance} from "@nuxtjs/firebase";

export class FirebaseService {
  private nuxtFire: NuxtFireInstance;

  constructor(nuxtFire: NuxtFireInstance) {
    this.nuxtFire = nuxtFire;
  }

  public async retrieveImageData(folderName: string) {
    const querySnapshot = await this.nuxtFire.firestore.collection(folderName).get();
    const imageNameList: string[] = []
    querySnapshot.forEach((doc) => {
        imageNameList.push(doc.get("image"))
      }
    )
    return await Promise.all(imageNameList.map(async image => await this.nuxtFire.storage.ref('gallery').child(image).getDownloadURL()));
  }

}
