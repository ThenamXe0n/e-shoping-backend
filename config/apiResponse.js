function ApiResponse( status, message, data, httpcode ) {
  this.status = status;
  this.message = message;
  this.data = data;
  this.code = httpcode;
  return this;
}

module.exports = ApiResponse;
