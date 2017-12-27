/// <reference types="node" />
export declare namespace Protocol {
    /**
     * pomele client encode
     * id message id;
     * route message route
     * msg message body
     * socketio current support string
     */
    function strencode(str: string): any;
    /**
     * client decode
     * msg String data
     * return Message Object
     */
    function strdecode(buffer: object): string;
}
export declare namespace Package {
    let TYPE_HANDSHAKE: number;
    let TYPE_HANDSHAKE_ACK: number;
    let TYPE_HEARTBEAT: number;
    let TYPE_DATA: number;
    let TYPE_KICK: number;
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
    function encode(type: number, body?: Buffer): any;
    /**
     * Package protocol decode.
     * See encode for package format.
     *
     * @param  {Buffer} buffer byte array containing package content
     * @return {Object}           {type: package type, buffer: body byte array}
     */
    function decode(buffer: Buffer): {
        'type': any;
        'body': any;
    } | {
        'type': any;
        'body': any;
    }[];
}
export declare namespace Message {
    let TYPE_REQUEST: number;
    let TYPE_NOTIFY: number;
    let TYPE_RESPONSE: number;
    let TYPE_PUSH: number;
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
    function encode(id: number, type: number, compressRoute: boolean, route: number & string & Buffer, msg: Buffer, compressGzip?: boolean): any;
    /**
     * Message protocol decode.
     *
     * @param  {Buffer|Uint8Array} buffer message bytes
     * @return {Object}            message object
     */
    function decode(buffer: Buffer): {
        'id': number;
        'type': number;
        'compressRoute': number;
        'route': string | number;
        'body': any;
        'compressGzip': number;
    };
}
