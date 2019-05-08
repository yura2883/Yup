
/** @typedef {{
	"f": Array<string>,
	"d": Array<Array<?>>,
	"m": ?Object<string, Object>
}} */
var FDM

/**
 * @struct
 * @constructor
 * @param {FDM} fdm
 */
function ypTable(fdm) {
	this.fdm = fdm
}

var p = ypTable.prototype

/** Iterates rowset by calling function cb with arguments: RowObject<key, value>, rowIndex<number>
 * @param  {Function} cb
 * @return {ypTable}
 * @this {ypTable}
 */
p.each = function(cb) {
	for(var i=0, iL=this.fdm['d'].length; i<iL; i++) {
		if(cb.call(this, this.getRow(i), i) === false) break
	}
	return this
}

/**
 * @return {number}
 * @this {ypTable}
 */
p.count = function() {
	return this.fdm['d'].length
}

/**
 * @param  {number} ri
 * @return {Object}
 * @this {ypTable}
*/
p.getRow = function(ri) {
	var aRow=this.fdm['d'][ri], flds=this.fdm['f'], ret={}
	for(var i=0, iL=flds.length; i<iL; i++) ret[flds[i]] = aRow[i]
	return ret
}

/**
 * Transpose dataset to Object like {field1:{data:[field1 data]}, ...}
 * @return {Object<string,Object>}
 * @this {ypTable}
 */
p.transpose = function() {
	var ret={}, fdm=this.fdm, fi, fld, fL
	for(fi=0, fL=fdm['f'].length; fi<fL; fi++) {
		fld = fdm['f'][fi]
		ret[fld] = {data:[]}
		for(var ri=0, rC=fdm['d'].length; ri<rC; ri++) {
			ret[fld]['data'].push(fdm['d'][ri][fi])
		}
	}
	return ret
}

export {ypTable}

