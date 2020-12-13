let layers = document.getElementsByName('layers');

const switchLayer = () => {
    let newArray = [];
    for(let i = 0; i < layers.length; i++){
        newArray.unshift(layers[i]);
    }
    layers = newArray;
    switchLayerIndex();
};

const switchLayerIndex = () => {
    for(let i = layers.length-1, k=0; i >= 0; i--, k++){
        layers[k].style.zIndex = i;
        layers[k].innerHTML = i+1;
    }
}