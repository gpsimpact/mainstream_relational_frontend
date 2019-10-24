export class PageInfo {
    constructor(params){
        this.params = new URLSearchParams(params);
        this.limit = 25;
        this.pageNumber = this.getPageNumber();
        this.offset=this.calcOffset();
    }
    calcOffset(){
        let offset=0;
        if(this.pageNumber > 1){
            offset = (this.pageNumber * this.limit) - this.limit;
        }
        return offset;
    }
    getPageNumber(){
        let pageNumber = 1;
        if(this.params.get("page")){
                pageNumber = parseInt(this.params.get("page")) | 0;
        }
        return pageNumber;
    }
}