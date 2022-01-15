class Cup{
    constructor(name, description, value, materials, weight){
        this.name = name;
        this.description = description;
        this.value = value;
        this.materials = materials;
        this.weight = weight;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description){
        this.description = description;
    }

    getValue(){
        return this.value;
    }

    setValue(value){
        this.value = value;
    }

    getMaterials(){
        return this.materials;
    }

    setMaterials(materials){
        this.materials = materials;
    }

    getWeight(){
        return this.weight;
    }

    setWeight(weight){
        this.weight = weight;
    }
}