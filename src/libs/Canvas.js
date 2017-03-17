function Canvas (width, height, options) {
	if (!(this instanceof Canvas)) return new Canvas();
	this.canvas = document.createElement('canvas');
	this.ctx = this.canvas.getContext('2d');
	this.ctx3 = this.canvas.getContext('webgl');
	this.canvas.width = width;
	this.canvas.height = height;
};
Canvas.prototype.resize = function() {

};
Canvas.prototype.setWidth = function (width) {
	width = width += '';
	width = Number.parseFloat(width);

	if(typeof width !== 'number' || Number.isNaN(width)) return console.log('请输入数字');
	width = Math.abs(width);
	this.canvas.width = width;
};
Canvas.prototype.setHeight = function (height) {
	height = Number.parseFloat(height + '');
	if (typeof height !== 'number' || Number.isNaN(height)) return console.log('请输入数字');
	height = Math.abs(height);
	this.canvas.height = height;
};
Canvas.prototype.setSize = function (width, height) {
	this.setWidth(width);
	this.setHeight(height);
};
Canvas.prototype.getContainerData = function (value) {
}