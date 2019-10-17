export class PageInfo {
    constructor(params){
        this.limit = 5;
        this.pageNumber = params.page ? parseInt(params.page) : 1;
        this.offset=this.calcOffset();
    }
    calcOffset(){
        let offset=0;
        if(this.pageNumber > 1){
            offset = (this.pageNumber * this.limit) - this.limit;
        }
        return offset;
    }
}