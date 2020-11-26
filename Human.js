//Xây dựng lớp Human mô tả đối tượng con người
class Human {
    //constructor là gì và nó làm gì?
    constructor(_name, _gender, _weight) {
        this.name = _name;
        this.gender = _gender;
        this.weight = _weight;
        this.foodNum = 0;
    }
    //Phân biệt Getter và Setter?
    //- Getter trả 1 giá trị
    //- Setter thay đổi giá trị của thuộc tính
    isMale(){
        //Method trả về boolean
        if(this.gender.toLowerCase() === 'male'){
            return true;
        }
        return false;
    }

    setGender(_gender){
        //Không trả về giá trị
        this.gender = _gender;
    }

    checkFruit(_fruit){
        //Trả về boolean
        if(_fruit.isEmpty()){
            return false;
        }
        return true;
    }

    eat(_fruit,number){
        //Không trả về giá trị
        if(this.checkFruit(_fruit)){
            if(number > _fruit.weight){
                number = _fruit.weight;
            }
            this.increaseWeight(number);
            _fruit.decrease(number);
            this.foodNum+=number;
        }else {
            this.say("Con gi dau ma an :'<");
        }
    }

    say(_content){
        //Không trả về giá trị
        alert(_content);
    }

    increaseWeight(value){
        this.weight+=value;
    }

    getWeight(){
        return this.weight;
    }
}
