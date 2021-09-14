/**
 * C, Ruby, PHP等にあるstrftime関数の簡易版（一部のフォーマットにのみ対応）
 *
 * @param {String} format フォーマット文字列
 * @param {object} date Dateオブジェクト
 */
function strftimeLite(format, date) {
  var result = format;
  result = result.replace(/%Y/g, date.getFullYear());
  result = result.replace(/%m/g, ("0" + (date.getMonth() + 1)).slice(-2));
  result = result.replace(/%d/g, ("0" + date.getDate()).slice(-2));
  result = result.replace(/%H/g, ("0" + date.getHours()).slice(-2));
  result = result.replace(/%M/g, ("0" + date.getMinutes()).slice(-2));
  result = result.replace(/%S/g, ("0" + date.getSeconds()).slice(-2));
  result = result.replace(/%L/g, ("000" + date.getMilliseconds()).slice(-3));
  result = result.replace(/%a/g, [ "日", "月", "火", "水", "木", "金", "土" ][date.getDay()]);
  return result;
}

exports.strftimeLite = strftimeLite;
