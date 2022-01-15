class Museum{
  constructor(){
    this.cups = [];
  }
  getCups(){
    return this.cups;
  }
  setCups(cups){
    this.cups = cups;
  }
  expositionGallery(){
    let cup1 = new Cup("Copa libertadores", "Esta es la copa libertadores actualmente ganada por Palameiras de Brasil.")
    this.cups.push(cup1);
  }
} 