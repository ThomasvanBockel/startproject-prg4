import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Bubble: new ImageSource('images/bubble.png'),
    Shark: new ImageSource('images/shark.png'),
   Background: new ImageSource('images/background.png'),
   NomNom: new Sound('sounds/hungry.wav')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }