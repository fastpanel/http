/**
 * RoutDefines.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { Di } from 'fastpanel-core';
import { IRouter } from 'express-serve-static-core';
/**
 * Class RoutDefines
 *
 * Command abstract class.
 *
 * @version 1.0.0
 */
export declare class RoutDefines extends Di.Injectable {
    /**
     *
     */
    protected router: IRouter;
    /**
     * RoutDefines constructor.
     *
     * @param di Di container instant.
     */
    constructor(di?: Di.Container);
    /**
     * Initialize command.
     */
    initialize(): Promise<any>;
}
