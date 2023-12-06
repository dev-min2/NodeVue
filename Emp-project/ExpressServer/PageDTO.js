class PageDTO {
	constructor(total, curPage, showContentCnt) {
		this.total = total;
    	this.currentPage = curPage;
		this.showContentCnt = showContentCnt;
		this.lastPage = Math.ceil((total / showContentCnt));

		this.endPage = Math.ceil(curPage / 10.0)  * 10;
		this.startPage = this.endPage - 9;
		
		this.endPage = this.endPage > this.lastPage ? this.lastPage : this.endPage;
		this.prev = this.currentPage > 1;
		this.next = this.currentPage < this.lastPage;
	}
}

module.exports = {
	PageDTO
}