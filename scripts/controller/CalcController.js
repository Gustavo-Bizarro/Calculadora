class CalcController {

    constructor(){
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }
initialize(){

     //Referencia o Elemento do Html (El) onde estamos manipulando.
   let displayCalcEl = document.querySelector("#display");
   let dateEl = document.querySelector("#data");
   let timeEl = document.querySelector("#hora");
   displayCalcEl.innerHTML = "4567"
   dateEl.innerHTML = "17/04/2023"
   timeEl.innerHTML = "18:52"

}

    get displayCalc(){
        return this._displayCalc;
    }
    set displayCalc(valor){
        this._displayCalc = valor;
    }
    get currentDate(){
        return this._currentDate;
    }
    set currentDate(data){
        this._currentDate = data;
    }
}