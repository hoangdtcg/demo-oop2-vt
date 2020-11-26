class Fruit {
    constructor(_name,_weight) {
        this.name = _name;
        this.weight = _weight;
    }

    decrease(value){
        this.weight-=value;
    }

    getWeight(){
        return this.weight;
    }

    //Kiểm tra xem táo còn hay hết
    isEmpty(){
       //Trả về boolean
        if(this.weight > 0){
            return false;
        }
        return true;
    }
}
