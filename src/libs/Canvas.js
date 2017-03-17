function Canvas (width, height, options) {
	if (!(this instanceof Canvas)) return new Canvas();
	this.cvs = document.createElement('canvas');
	this.ctx = this.cvs.getContext('2d');
	this.ctx3 = this.cvs.getContext('experimental-webgl');
	this.cvs.width = width;
	this.cvs.height = height;
};
Canvas.prototype.resize = function() {

};
Canvas.prototype.setWidth = function (width) {
	width = width += '';
	width = Number.parseFloat(width);

	if(typeof width !== 'number' || Number.isNaN(width)) return console.log('请输入数字');
	width = Math.abs(width);
	this.cvs.width = width;
};
Canvas.prototype.setHeight = function (height) {
	height = Number.parseFloat(height + '');
	if (typeof height !== 'number' || Number.isNaN(height)) return console.log('请输入数字');
	height = Math.abs(height);
	this.cvs.height = height;
};
Canvas.prototype.setSize = function (width, height) {
	this.setWidth(width);
	this.setHeight(height);
};
Canvas.prototype.getContainerData = function (value) {
}