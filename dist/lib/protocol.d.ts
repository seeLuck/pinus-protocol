export declare namespace Protocol {
    /**
     * pomele client encode
     * id message id;
     * route message route
     * msg message body
     * socketio current support string
     */
    function strencode(str: any): any;
    /**
     * client decode
     * msg String data
     * return Message Object
     */
    function strdecode(buffer: any): any;
}
export declare namespace Package {
    var TYPE_HANDSHAKE: number;
    var TYPE_HANDSHAKE_ACK: number;
    var TYPE_HEARTBEAT: number;
    var TYPE_DATA: number;
    var TYPE_KICK: number;
    /**
     * Package protocol encode.
     *
     * Pomelo package format:
     * +------+-------------+------------------+
     * | type | body length |       body       |
     * +------+-------------+------------------+
     *
     * Head: 4bytes
     *   0: package type,
     *      1 - handshake,
     *      2 - handshake ack,
     *      3 - heartbeat,
     *      4 - data
     *      5 - kick
     *   1 - 3: big-endian body length
     * Body: body length bytes
     *
     * @param  {Number}    type   package type
     * @param  {Buffer} body   body content in bytes
     * @return {Buffer}        new byte array that contains encode result
     */
    function encode(type: any, body?: any): any;
    /**
     * Package protocol decode.
     * See encode for package format.
     *
     * @param  {Buffer} buffer byte array containing package content
     * @return {Object}           {type: package type, buffer: body byte array}
     */
    function decode(buffer: any): any;
}
export declare namespace Message {
    var TYPE_REQUEST: number;
    var TYPE_NOTIFY: number;
    var TYPE_RESPONSE: number;
    var TYPE_PUSH: number;
    /**
     * Message protocol encode.
     *
     * @param  {Number} id            message id
     * @param  {Number} type          message type
     * @param  {Number} compressRoute whether compress route
     * @param  {Number|String} route  route code or route string
     * @param  {Buffer} msg           message body bytes
     * @return {Buffer}               encode result
     */
    function encode(id: any, type: any, compressRoute: any, route: any, msg: any, compressGzip?: boolean): any;
    /**
     * Message protocol decode.
     *
     * @param  {Buffer|Uint8Array} buffer message bytes
     * @return {Object}            message object
     */
    function decode(buffer: any): {
        'id': number;
        'type': number;
        'compressRoute': number;
        'route': any;
        'body': any;
        'compressGzip': number;
    };
}
