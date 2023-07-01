
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type categoriasPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    productos: productosPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    nombre: string | null
  }, ExtArgs["result"]["categorias"]>
  composites: {}
}

/**
 * Model categorias
 * 
 */
export type categorias = runtime.Types.DefaultSelection<categoriasPayload>
export type clientesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    compras: comprasPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    nombre: string | null
    direccion: string | null
    telefono: string | null
  }, ExtArgs["result"]["clientes"]>
  composites: {}
}

/**
 * Model clientes
 * 
 */
export type clientes = runtime.Types.DefaultSelection<clientesPayload>
export type comprasPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    clientes: clientesPayload<ExtArgs> | null
    productos: productosPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    cliente_id: number | null
    producto_id: number | null
    cantidad: number | null
    fecha: Date | null
  }, ExtArgs["result"]["compras"]>
  composites: {}
}

/**
 * Model compras
 * 
 */
export type compras = runtime.Types.DefaultSelection<comprasPayload>
export type productosPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    compras: comprasPayload<ExtArgs>[]
    categorias: categoriasPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    nombre: string | null
    precio: Prisma.Decimal | null
    descripcion: string | null
    categoria_id: number | null
  }, ExtArgs["result"]["productos"]>
  composites: {}
}

/**
 * Model productos
 * 
 */
export type productos = runtime.Types.DefaultSelection<productosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categorias.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categorias.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.compras`: Exposes CRUD operations for the **compras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compras.findMany()
    * ```
    */
  get compras(): Prisma.comprasDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.productosDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.1
   * Query Engine version: b20ead4d3ab9e78ac112966e242ded703f4a052c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categorias: 'categorias',
    clientes: 'clientes',
    compras: 'compras',
    productos: 'productos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'categorias' | 'clientes' | 'compras' | 'productos'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      categorias: {
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<categoriasPayload> | null
            payload: categoriasPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<categoriasPayload>
            payload: categoriasPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<categoriasPayload> | null
            payload: categoriasPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<categoriasPayload>
            payload: categoriasPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<categoriasPayload>[]
            payload: categoriasPayload<ExtArgs>
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<categoriasPayload>
            payload: categoriasPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: categoriasPayload<ExtArgs>
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<categoriasPayload>
            payload: categoriasPayload<ExtArgs>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<categoriasPayload>
            payload: categoriasPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: categoriasPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: categoriasPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<categoriasPayload>
            payload: categoriasPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategorias>
            payload: categoriasPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.CategoriasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
            payload: categoriasPayload<ExtArgs>
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
            payload: categoriasPayload<ExtArgs>
          }
        }
      }
      clientes: {
        operations: {
          findUnique: {
            args: Prisma.clientesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<clientesPayload> | null
            payload: clientesPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<clientesPayload>
            payload: clientesPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.clientesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<clientesPayload> | null
            payload: clientesPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<clientesPayload>
            payload: clientesPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.clientesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<clientesPayload>[]
            payload: clientesPayload<ExtArgs>
          }
          create: {
            args: Prisma.clientesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<clientesPayload>
            payload: clientesPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.clientesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: clientesPayload<ExtArgs>
          }
          delete: {
            args: Prisma.clientesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<clientesPayload>
            payload: clientesPayload<ExtArgs>
          }
          update: {
            args: Prisma.clientesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<clientesPayload>
            payload: clientesPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.clientesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: clientesPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.clientesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: clientesPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.clientesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<clientesPayload>
            payload: clientesPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClientes>
            payload: clientesPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ClientesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientesGroupByOutputType>[]
            payload: clientesPayload<ExtArgs>
          }
          count: {
            args: Prisma.clientesCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
            payload: clientesPayload<ExtArgs>
          }
        }
      }
      compras: {
        operations: {
          findUnique: {
            args: Prisma.comprasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comprasPayload> | null
            payload: comprasPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.comprasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comprasPayload>
            payload: comprasPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.comprasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comprasPayload> | null
            payload: comprasPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.comprasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comprasPayload>
            payload: comprasPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.comprasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comprasPayload>[]
            payload: comprasPayload<ExtArgs>
          }
          create: {
            args: Prisma.comprasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comprasPayload>
            payload: comprasPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.comprasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: comprasPayload<ExtArgs>
          }
          delete: {
            args: Prisma.comprasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comprasPayload>
            payload: comprasPayload<ExtArgs>
          }
          update: {
            args: Prisma.comprasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comprasPayload>
            payload: comprasPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.comprasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: comprasPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.comprasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: comprasPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.comprasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<comprasPayload>
            payload: comprasPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ComprasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompras>
            payload: comprasPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ComprasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ComprasGroupByOutputType>[]
            payload: comprasPayload<ExtArgs>
          }
          count: {
            args: Prisma.comprasCountArgs<ExtArgs>,
            result: $Utils.Optional<ComprasCountAggregateOutputType> | number
            payload: comprasPayload<ExtArgs>
          }
        }
      }
      productos: {
        operations: {
          findUnique: {
            args: Prisma.productosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<productosPayload> | null
            payload: productosPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.productosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<productosPayload>
            payload: productosPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.productosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<productosPayload> | null
            payload: productosPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.productosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<productosPayload>
            payload: productosPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.productosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<productosPayload>[]
            payload: productosPayload<ExtArgs>
          }
          create: {
            args: Prisma.productosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<productosPayload>
            payload: productosPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.productosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: productosPayload<ExtArgs>
          }
          delete: {
            args: Prisma.productosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<productosPayload>
            payload: productosPayload<ExtArgs>
          }
          update: {
            args: Prisma.productosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<productosPayload>
            payload: productosPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.productosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: productosPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.productosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: productosPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.productosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<productosPayload>
            payload: productosPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductos>
            payload: productosPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.ProductosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductosGroupByOutputType>[]
            payload: productosPayload<ExtArgs>
          }
          count: {
            args: Prisma.productosCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
            payload: productosPayload<ExtArgs>
          }
        }
      }
    }
  } & {
    other: {
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
          payload: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
          payload: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
          payload: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
          payload: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriasCountOutputType
   */


  export type CategoriasCountOutputType = {
    productos: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriasCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
  }



  /**
   * Count Type ClientesCountOutputType
   */


  export type ClientesCountOutputType = {
    compras: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    compras?: boolean | ClientesCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: comprasWhereInput
  }



  /**
   * Count Type ProductosCountOutputType
   */


  export type ProductosCountOutputType = {
    compras: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    compras?: boolean | ProductosCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: comprasWhereInput
  }



  /**
   * Models
   */

  /**
   * Model categorias
   */


  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriasCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id?: true
  }

  export type CategoriasSumAggregateInputType = {
    id?: true
  }

  export type CategoriasMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriasCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type CategoriasGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: Enumerable<categoriasOrderByWithAggregationInput>
    by: CategoriasScalarFieldEnum[]
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }


  export type CategoriasGroupByOutputType = {
    id: number
    nombre: string | null
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends CategoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    productos?: boolean | categorias$productosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type categoriasInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    productos?: boolean | categorias$productosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeArgs<ExtArgs>
  }


  type categoriasGetPayload<S extends boolean | null | undefined | categoriasArgs> = $Types.GetResult<categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<categoriasFindManyArgs, 'select' | 'include'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoriasFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'categorias'> extends True ? Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Categorias that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoriasFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'categorias'> extends True ? Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Categorias that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriasWithIdOnly = await prisma.categorias.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoriasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
    **/
    create<T extends categoriasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>
    ): Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Categorias.
     *     @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     *     @example
     *     // Create many Categorias
     *     const categorias = await prisma.categorias.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoriasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
    **/
    delete<T extends categoriasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>
    ): Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoriasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>
    ): Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoriasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoriasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
    **/
    upsert<T extends categoriasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>
    ): Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriasGroupByArgs['orderBy'] }
        : { orderBy?: CategoriasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    productos<T extends categorias$productosArgs<ExtArgs> = {}>(args?: Subset<T, categorias$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<productosPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * categorias base type for findUnique actions
   */
  export type categoriasFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUnique
   */
  export interface categoriasFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends categoriasFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }


  /**
   * categorias base type for findFirst actions
   */
  export type categoriasFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: Enumerable<CategoriasScalarFieldEnum>
  }

  /**
   * categorias findFirst
   */
  export interface categoriasFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends categoriasFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: Enumerable<CategoriasScalarFieldEnum>
  }


  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: Enumerable<CategoriasScalarFieldEnum>
  }


  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }


  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: Enumerable<categoriasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }


  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
  }


  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }


  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }


  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
  }


  /**
   * categorias.productos
   */
  export type categorias$productosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
    orderBy?: Enumerable<productosOrderByWithRelationInput>
    cursor?: productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductosScalarFieldEnum>
  }


  /**
   * categorias without action
   */
  export type categoriasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoriasInclude<ExtArgs> | null
  }



  /**
   * Model clientes
   */


  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientesSumAggregateOutputType = {
    id: number | null
  }

  export type ClientesMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    telefono: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    id?: true
  }

  export type ClientesSumAggregateInputType = {
    id?: true
  }

  export type ClientesMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: Enumerable<clientesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type ClientesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
    orderBy?: Enumerable<clientesOrderByWithAggregationInput>
    by: ClientesScalarFieldEnum[]
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }


  export type ClientesGroupByOutputType = {
    id: number
    nombre: string | null
    direccion: string | null
    telefono: string | null
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    compras?: boolean | clientes$comprasArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type clientesSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
  }

  export type clientesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    compras?: boolean | clientes$comprasArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeArgs<ExtArgs>
  }


  type clientesGetPayload<S extends boolean | null | undefined | clientesArgs> = $Types.GetResult<clientesPayload, S>

  type clientesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<clientesFindManyArgs, 'select' | 'include'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientes'], meta: { name: 'clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clientesFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'clientes'> extends True ? Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Clientes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clientesFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, clientesFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'clientes'> extends True ? Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Clientes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends clientesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<clientesPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
    **/
    create<T extends clientesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clientesCreateArgs<ExtArgs>>
    ): Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Clientes.
     *     @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     *     @example
     *     // Create many Clientes
     *     const clientes = await prisma.clientes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends clientesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
    **/
    delete<T extends clientesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clientesDeleteArgs<ExtArgs>>
    ): Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clientesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clientesUpdateArgs<ExtArgs>>
    ): Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clientesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clientesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
    **/
    upsert<T extends clientesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clientesUpsertArgs<ExtArgs>>
    ): Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientesGroupByArgs['orderBy'] }
        : { orderBy?: ClientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__clientesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    compras<T extends clientes$comprasArgs<ExtArgs> = {}>(args?: Subset<T, clientes$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<comprasPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * clientes base type for findUnique actions
   */
  export type clientesFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUnique
   */
  export interface clientesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends clientesFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }


  /**
   * clientes base type for findFirst actions
   */
  export type clientesFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: Enumerable<clientesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: Enumerable<ClientesScalarFieldEnum>
  }

  /**
   * clientes findFirst
   */
  export interface clientesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends clientesFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: Enumerable<clientesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: Enumerable<ClientesScalarFieldEnum>
  }


  /**
   * clientes findMany
   */
  export type clientesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: Enumerable<clientesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: Enumerable<ClientesScalarFieldEnum>
  }


  /**
   * clientes create
   */
  export type clientesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }


  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: Enumerable<clientesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * clientes update
   */
  export type clientesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }


  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
  }


  /**
   * clientes upsert
   */
  export type clientesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }


  /**
   * clientes delete
   */
  export type clientesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }


  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
  }


  /**
   * clientes.compras
   */
  export type clientes$comprasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    where?: comprasWhereInput
    orderBy?: Enumerable<comprasOrderByWithRelationInput>
    cursor?: comprasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ComprasScalarFieldEnum>
  }


  /**
   * clientes without action
   */
  export type clientesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientesInclude<ExtArgs> | null
  }



  /**
   * Model compras
   */


  export type AggregateCompras = {
    _count: ComprasCountAggregateOutputType | null
    _avg: ComprasAvgAggregateOutputType | null
    _sum: ComprasSumAggregateOutputType | null
    _min: ComprasMinAggregateOutputType | null
    _max: ComprasMaxAggregateOutputType | null
  }

  export type ComprasAvgAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    producto_id: number | null
    cantidad: number | null
  }

  export type ComprasSumAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    producto_id: number | null
    cantidad: number | null
  }

  export type ComprasMinAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    producto_id: number | null
    cantidad: number | null
    fecha: Date | null
  }

  export type ComprasMaxAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    producto_id: number | null
    cantidad: number | null
    fecha: Date | null
  }

  export type ComprasCountAggregateOutputType = {
    id: number
    cliente_id: number
    producto_id: number
    cantidad: number
    fecha: number
    _all: number
  }


  export type ComprasAvgAggregateInputType = {
    id?: true
    cliente_id?: true
    producto_id?: true
    cantidad?: true
  }

  export type ComprasSumAggregateInputType = {
    id?: true
    cliente_id?: true
    producto_id?: true
    cantidad?: true
  }

  export type ComprasMinAggregateInputType = {
    id?: true
    cliente_id?: true
    producto_id?: true
    cantidad?: true
    fecha?: true
  }

  export type ComprasMaxAggregateInputType = {
    id?: true
    cliente_id?: true
    producto_id?: true
    cantidad?: true
    fecha?: true
  }

  export type ComprasCountAggregateInputType = {
    id?: true
    cliente_id?: true
    producto_id?: true
    cantidad?: true
    fecha?: true
    _all?: true
  }

  export type ComprasAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which compras to aggregate.
     */
    where?: comprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compras to fetch.
     */
    orderBy?: Enumerable<comprasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned compras
    **/
    _count?: true | ComprasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComprasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComprasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComprasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComprasMaxAggregateInputType
  }

  export type GetComprasAggregateType<T extends ComprasAggregateArgs> = {
        [P in keyof T & keyof AggregateCompras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompras[P]>
      : GetScalarType<T[P], AggregateCompras[P]>
  }




  export type ComprasGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: comprasWhereInput
    orderBy?: Enumerable<comprasOrderByWithAggregationInput>
    by: ComprasScalarFieldEnum[]
    having?: comprasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComprasCountAggregateInputType | true
    _avg?: ComprasAvgAggregateInputType
    _sum?: ComprasSumAggregateInputType
    _min?: ComprasMinAggregateInputType
    _max?: ComprasMaxAggregateInputType
  }


  export type ComprasGroupByOutputType = {
    id: number
    cliente_id: number | null
    producto_id: number | null
    cantidad: number | null
    fecha: Date | null
    _count: ComprasCountAggregateOutputType | null
    _avg: ComprasAvgAggregateOutputType | null
    _sum: ComprasSumAggregateOutputType | null
    _min: ComprasMinAggregateOutputType | null
    _max: ComprasMaxAggregateOutputType | null
  }

  type GetComprasGroupByPayload<T extends ComprasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ComprasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComprasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComprasGroupByOutputType[P]>
            : GetScalarType<T[P], ComprasGroupByOutputType[P]>
        }
      >
    >


  export type comprasSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente_id?: boolean
    producto_id?: boolean
    cantidad?: boolean
    fecha?: boolean
    clientes?: boolean | clientesArgs<ExtArgs>
    productos?: boolean | productosArgs<ExtArgs>
  }, ExtArgs["result"]["compras"]>

  export type comprasSelectScalar = {
    id?: boolean
    cliente_id?: boolean
    producto_id?: boolean
    cantidad?: boolean
    fecha?: boolean
  }

  export type comprasInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    clientes?: boolean | clientesArgs<ExtArgs>
    productos?: boolean | productosArgs<ExtArgs>
  }


  type comprasGetPayload<S extends boolean | null | undefined | comprasArgs> = $Types.GetResult<comprasPayload, S>

  type comprasCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<comprasFindManyArgs, 'select' | 'include'> & {
      select?: ComprasCountAggregateInputType | true
    }

  export interface comprasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['compras'], meta: { name: 'compras' } }
    /**
     * Find zero or one Compras that matches the filter.
     * @param {comprasFindUniqueArgs} args - Arguments to find a Compras
     * @example
     * // Get one Compras
     * const compras = await prisma.compras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends comprasFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, comprasFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'compras'> extends True ? Prisma__comprasClient<$Types.GetResult<comprasPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__comprasClient<$Types.GetResult<comprasPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Compras that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {comprasFindUniqueOrThrowArgs} args - Arguments to find a Compras
     * @example
     * // Get one Compras
     * const compras = await prisma.compras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends comprasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, comprasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__comprasClient<$Types.GetResult<comprasPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprasFindFirstArgs} args - Arguments to find a Compras
     * @example
     * // Get one Compras
     * const compras = await prisma.compras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends comprasFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, comprasFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'compras'> extends True ? Prisma__comprasClient<$Types.GetResult<comprasPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__comprasClient<$Types.GetResult<comprasPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Compras that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprasFindFirstOrThrowArgs} args - Arguments to find a Compras
     * @example
     * // Get one Compras
     * const compras = await prisma.compras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends comprasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, comprasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__comprasClient<$Types.GetResult<comprasPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compras.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comprasWithIdOnly = await prisma.compras.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends comprasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, comprasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<comprasPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Compras.
     * @param {comprasCreateArgs} args - Arguments to create a Compras.
     * @example
     * // Create one Compras
     * const Compras = await prisma.compras.create({
     *   data: {
     *     // ... data to create a Compras
     *   }
     * })
     * 
    **/
    create<T extends comprasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, comprasCreateArgs<ExtArgs>>
    ): Prisma__comprasClient<$Types.GetResult<comprasPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Compras.
     *     @param {comprasCreateManyArgs} args - Arguments to create many Compras.
     *     @example
     *     // Create many Compras
     *     const compras = await prisma.compras.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends comprasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, comprasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Compras.
     * @param {comprasDeleteArgs} args - Arguments to delete one Compras.
     * @example
     * // Delete one Compras
     * const Compras = await prisma.compras.delete({
     *   where: {
     *     // ... filter to delete one Compras
     *   }
     * })
     * 
    **/
    delete<T extends comprasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, comprasDeleteArgs<ExtArgs>>
    ): Prisma__comprasClient<$Types.GetResult<comprasPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Compras.
     * @param {comprasUpdateArgs} args - Arguments to update one Compras.
     * @example
     * // Update one Compras
     * const compras = await prisma.compras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends comprasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, comprasUpdateArgs<ExtArgs>>
    ): Prisma__comprasClient<$Types.GetResult<comprasPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Compras.
     * @param {comprasDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends comprasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, comprasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compras = await prisma.compras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends comprasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, comprasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Compras.
     * @param {comprasUpsertArgs} args - Arguments to update or create a Compras.
     * @example
     * // Update or create a Compras
     * const compras = await prisma.compras.upsert({
     *   create: {
     *     // ... data to create a Compras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compras we want to update
     *   }
     * })
    **/
    upsert<T extends comprasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, comprasUpsertArgs<ExtArgs>>
    ): Prisma__comprasClient<$Types.GetResult<comprasPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comprasCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compras.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends comprasCountArgs>(
      args?: Subset<T, comprasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComprasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComprasAggregateArgs>(args: Subset<T, ComprasAggregateArgs>): Prisma.PrismaPromise<GetComprasAggregateType<T>>

    /**
     * Group by Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComprasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComprasGroupByArgs['orderBy'] }
        : { orderBy?: ComprasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComprasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComprasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for compras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__comprasClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    clientes<T extends clientesArgs<ExtArgs> = {}>(args?: Subset<T, clientesArgs<ExtArgs>>): Prisma__clientesClient<$Types.GetResult<clientesPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    productos<T extends productosArgs<ExtArgs> = {}>(args?: Subset<T, productosArgs<ExtArgs>>): Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * compras base type for findUnique actions
   */
  export type comprasFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    /**
     * Filter, which compras to fetch.
     */
    where: comprasWhereUniqueInput
  }

  /**
   * compras findUnique
   */
  export interface comprasFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends comprasFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * compras findUniqueOrThrow
   */
  export type comprasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    /**
     * Filter, which compras to fetch.
     */
    where: comprasWhereUniqueInput
  }


  /**
   * compras base type for findFirst actions
   */
  export type comprasFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    /**
     * Filter, which compras to fetch.
     */
    where?: comprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compras to fetch.
     */
    orderBy?: Enumerable<comprasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for compras.
     */
    cursor?: comprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compras.
     */
    distinct?: Enumerable<ComprasScalarFieldEnum>
  }

  /**
   * compras findFirst
   */
  export interface comprasFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends comprasFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * compras findFirstOrThrow
   */
  export type comprasFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    /**
     * Filter, which compras to fetch.
     */
    where?: comprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compras to fetch.
     */
    orderBy?: Enumerable<comprasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for compras.
     */
    cursor?: comprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compras.
     */
    distinct?: Enumerable<ComprasScalarFieldEnum>
  }


  /**
   * compras findMany
   */
  export type comprasFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    /**
     * Filter, which compras to fetch.
     */
    where?: comprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compras to fetch.
     */
    orderBy?: Enumerable<comprasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing compras.
     */
    cursor?: comprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compras.
     */
    skip?: number
    distinct?: Enumerable<ComprasScalarFieldEnum>
  }


  /**
   * compras create
   */
  export type comprasCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    /**
     * The data needed to create a compras.
     */
    data: XOR<comprasCreateInput, comprasUncheckedCreateInput>
  }


  /**
   * compras createMany
   */
  export type comprasCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many compras.
     */
    data: Enumerable<comprasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * compras update
   */
  export type comprasUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    /**
     * The data needed to update a compras.
     */
    data: XOR<comprasUpdateInput, comprasUncheckedUpdateInput>
    /**
     * Choose, which compras to update.
     */
    where: comprasWhereUniqueInput
  }


  /**
   * compras updateMany
   */
  export type comprasUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update compras.
     */
    data: XOR<comprasUpdateManyMutationInput, comprasUncheckedUpdateManyInput>
    /**
     * Filter which compras to update
     */
    where?: comprasWhereInput
  }


  /**
   * compras upsert
   */
  export type comprasUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    /**
     * The filter to search for the compras to update in case it exists.
     */
    where: comprasWhereUniqueInput
    /**
     * In case the compras found by the `where` argument doesn't exist, create a new compras with this data.
     */
    create: XOR<comprasCreateInput, comprasUncheckedCreateInput>
    /**
     * In case the compras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comprasUpdateInput, comprasUncheckedUpdateInput>
  }


  /**
   * compras delete
   */
  export type comprasDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    /**
     * Filter which compras to delete.
     */
    where: comprasWhereUniqueInput
  }


  /**
   * compras deleteMany
   */
  export type comprasDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which compras to delete
     */
    where?: comprasWhereInput
  }


  /**
   * compras without action
   */
  export type comprasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
  }



  /**
   * Model productos
   */


  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    id: number | null
    precio: Decimal | null
    categoria_id: number | null
  }

  export type ProductosSumAggregateOutputType = {
    id: number | null
    precio: Decimal | null
    categoria_id: number | null
  }

  export type ProductosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: Decimal | null
    descripcion: string | null
    categoria_id: number | null
  }

  export type ProductosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: Decimal | null
    descripcion: string | null
    categoria_id: number | null
  }

  export type ProductosCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    descripcion: number
    categoria_id: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    id?: true
    precio?: true
    categoria_id?: true
  }

  export type ProductosSumAggregateInputType = {
    id?: true
    precio?: true
    categoria_id?: true
  }

  export type ProductosMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    descripcion?: true
    categoria_id?: true
  }

  export type ProductosMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    descripcion?: true
    categoria_id?: true
  }

  export type ProductosCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    descripcion?: true
    categoria_id?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to aggregate.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: Enumerable<productosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type ProductosGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
    orderBy?: Enumerable<productosOrderByWithAggregationInput>
    by: ProductosScalarFieldEnum[]
    having?: productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }


  export type ProductosGroupByOutputType = {
    id: number
    nombre: string | null
    precio: Decimal | null
    descripcion: string | null
    categoria_id: number | null
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends ProductosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type productosSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    descripcion?: boolean
    categoria_id?: boolean
    compras?: boolean | productos$comprasArgs<ExtArgs>
    categorias?: boolean | categoriasArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type productosSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    descripcion?: boolean
    categoria_id?: boolean
  }

  export type productosInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    compras?: boolean | productos$comprasArgs<ExtArgs>
    categorias?: boolean | categoriasArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeArgs<ExtArgs>
  }


  type productosGetPayload<S extends boolean | null | undefined | productosArgs> = $Types.GetResult<productosPayload, S>

  type productosCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<productosFindManyArgs, 'select' | 'include'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface productosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productos'], meta: { name: 'productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {productosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productosFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, productosFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'productos'> extends True ? Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Productos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productosFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, productosFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'productos'> extends True ? Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Productos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productosWithIdOnly = await prisma.productos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<productosPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Productos.
     * @param {productosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
    **/
    create<T extends productosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productosCreateArgs<ExtArgs>>
    ): Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Productos.
     *     @param {productosCreateManyArgs} args - Arguments to create many Productos.
     *     @example
     *     // Create many Productos
     *     const productos = await prisma.productos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Productos.
     * @param {productosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
    **/
    delete<T extends productosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productosDeleteArgs<ExtArgs>>
    ): Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Productos.
     * @param {productosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productosUpdateArgs<ExtArgs>>
    ): Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Productos.
     * @param {productosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Productos.
     * @param {productosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
    **/
    upsert<T extends productosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productosUpsertArgs<ExtArgs>>
    ): Prisma__productosClient<$Types.GetResult<productosPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productosCountArgs>(
      args?: Subset<T, productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductosGroupByArgs['orderBy'] }
        : { orderBy?: ProductosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__productosClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    compras<T extends productos$comprasArgs<ExtArgs> = {}>(args?: Subset<T, productos$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<comprasPayload<ExtArgs>, T, 'findMany', never>| Null>;

    categorias<T extends categoriasArgs<ExtArgs> = {}>(args?: Subset<T, categoriasArgs<ExtArgs>>): Prisma__categoriasClient<$Types.GetResult<categoriasPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * productos base type for findUnique actions
   */
  export type productosFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findUnique
   */
  export interface productosFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends productosFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * productos findUniqueOrThrow
   */
  export type productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }


  /**
   * productos base type for findFirst actions
   */
  export type productosFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: Enumerable<productosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: Enumerable<ProductosScalarFieldEnum>
  }

  /**
   * productos findFirst
   */
  export interface productosFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends productosFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * productos findFirstOrThrow
   */
  export type productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: Enumerable<productosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: Enumerable<ProductosScalarFieldEnum>
  }


  /**
   * productos findMany
   */
  export type productosFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: Enumerable<productosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: Enumerable<ProductosScalarFieldEnum>
  }


  /**
   * productos create
   */
  export type productosCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to create a productos.
     */
    data: XOR<productosCreateInput, productosUncheckedCreateInput>
  }


  /**
   * productos createMany
   */
  export type productosCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: Enumerable<productosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * productos update
   */
  export type productosUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to update a productos.
     */
    data: XOR<productosUpdateInput, productosUncheckedUpdateInput>
    /**
     * Choose, which productos to update.
     */
    where: productosWhereUniqueInput
  }


  /**
   * productos updateMany
   */
  export type productosUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
  }


  /**
   * productos upsert
   */
  export type productosUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The filter to search for the productos to update in case it exists.
     */
    where: productosWhereUniqueInput
    /**
     * In case the productos found by the `where` argument doesn't exist, create a new productos with this data.
     */
    create: XOR<productosCreateInput, productosUncheckedCreateInput>
    /**
     * In case the productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productosUpdateInput, productosUncheckedUpdateInput>
  }


  /**
   * productos delete
   */
  export type productosDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter which productos to delete.
     */
    where: productosWhereUniqueInput
  }


  /**
   * productos deleteMany
   */
  export type productosDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productosWhereInput
  }


  /**
   * productos.compras
   */
  export type productos$comprasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compras
     */
    select?: comprasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: comprasInclude<ExtArgs> | null
    where?: comprasWhereInput
    orderBy?: Enumerable<comprasOrderByWithRelationInput>
    cursor?: comprasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ComprasScalarFieldEnum>
  }


  /**
   * productos without action
   */
  export type productosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productosInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const ClientesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    telefono: 'telefono'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const ComprasScalarFieldEnum: {
    id: 'id',
    cliente_id: 'cliente_id',
    producto_id: 'producto_id',
    cantidad: 'cantidad',
    fecha: 'fecha'
  };

  export type ComprasScalarFieldEnum = (typeof ComprasScalarFieldEnum)[keyof typeof ComprasScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio',
    descripcion: 'descripcion',
    categoria_id: 'categoria_id'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type categoriasWhereInput = {
    AND?: Enumerable<categoriasWhereInput>
    OR?: Enumerable<categoriasWhereInput>
    NOT?: Enumerable<categoriasWhereInput>
    id?: IntFilter | number
    nombre?: StringNullableFilter | string | null
    productos?: ProductosListRelationFilter
  }

  export type categoriasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    productos?: productosOrderByRelationAggregateInput
  }

  export type categoriasWhereUniqueInput = {
    id?: number
  }

  export type categoriasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<categoriasScalarWhereWithAggregatesInput>
    OR?: Enumerable<categoriasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<categoriasScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nombre?: StringNullableWithAggregatesFilter | string | null
  }

  export type clientesWhereInput = {
    AND?: Enumerable<clientesWhereInput>
    OR?: Enumerable<clientesWhereInput>
    NOT?: Enumerable<clientesWhereInput>
    id?: IntFilter | number
    nombre?: StringNullableFilter | string | null
    direccion?: StringNullableFilter | string | null
    telefono?: StringNullableFilter | string | null
    compras?: ComprasListRelationFilter
  }

  export type clientesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    compras?: comprasOrderByRelationAggregateInput
  }

  export type clientesWhereUniqueInput = {
    id?: number
  }

  export type clientesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    _count?: clientesCountOrderByAggregateInput
    _avg?: clientesAvgOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
    _sum?: clientesSumOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<clientesScalarWhereWithAggregatesInput>
    OR?: Enumerable<clientesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<clientesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nombre?: StringNullableWithAggregatesFilter | string | null
    direccion?: StringNullableWithAggregatesFilter | string | null
    telefono?: StringNullableWithAggregatesFilter | string | null
  }

  export type comprasWhereInput = {
    AND?: Enumerable<comprasWhereInput>
    OR?: Enumerable<comprasWhereInput>
    NOT?: Enumerable<comprasWhereInput>
    id?: IntFilter | number
    cliente_id?: IntNullableFilter | number | null
    producto_id?: IntNullableFilter | number | null
    cantidad?: IntNullableFilter | number | null
    fecha?: DateTimeNullableFilter | Date | string | null
    clientes?: XOR<ClientesRelationFilter, clientesWhereInput> | null
    productos?: XOR<ProductosRelationFilter, productosWhereInput> | null
  }

  export type comprasOrderByWithRelationInput = {
    id?: SortOrder
    cliente_id?: SortOrderInput | SortOrder
    producto_id?: SortOrderInput | SortOrder
    cantidad?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    clientes?: clientesOrderByWithRelationInput
    productos?: productosOrderByWithRelationInput
  }

  export type comprasWhereUniqueInput = {
    id?: number
  }

  export type comprasOrderByWithAggregationInput = {
    id?: SortOrder
    cliente_id?: SortOrderInput | SortOrder
    producto_id?: SortOrderInput | SortOrder
    cantidad?: SortOrderInput | SortOrder
    fecha?: SortOrderInput | SortOrder
    _count?: comprasCountOrderByAggregateInput
    _avg?: comprasAvgOrderByAggregateInput
    _max?: comprasMaxOrderByAggregateInput
    _min?: comprasMinOrderByAggregateInput
    _sum?: comprasSumOrderByAggregateInput
  }

  export type comprasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<comprasScalarWhereWithAggregatesInput>
    OR?: Enumerable<comprasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<comprasScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    cliente_id?: IntNullableWithAggregatesFilter | number | null
    producto_id?: IntNullableWithAggregatesFilter | number | null
    cantidad?: IntNullableWithAggregatesFilter | number | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type productosWhereInput = {
    AND?: Enumerable<productosWhereInput>
    OR?: Enumerable<productosWhereInput>
    NOT?: Enumerable<productosWhereInput>
    id?: IntFilter | number
    nombre?: StringNullableFilter | string | null
    precio?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    descripcion?: StringNullableFilter | string | null
    categoria_id?: IntNullableFilter | number | null
    compras?: ComprasListRelationFilter
    categorias?: XOR<CategoriasRelationFilter, categoriasWhereInput> | null
  }

  export type productosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    precio?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    categoria_id?: SortOrderInput | SortOrder
    compras?: comprasOrderByRelationAggregateInput
    categorias?: categoriasOrderByWithRelationInput
  }

  export type productosWhereUniqueInput = {
    id?: number
  }

  export type productosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    precio?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    categoria_id?: SortOrderInput | SortOrder
    _count?: productosCountOrderByAggregateInput
    _avg?: productosAvgOrderByAggregateInput
    _max?: productosMaxOrderByAggregateInput
    _min?: productosMinOrderByAggregateInput
    _sum?: productosSumOrderByAggregateInput
  }

  export type productosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<productosScalarWhereWithAggregatesInput>
    OR?: Enumerable<productosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<productosScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nombre?: StringNullableWithAggregatesFilter | string | null
    precio?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    descripcion?: StringNullableWithAggregatesFilter | string | null
    categoria_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type categoriasCreateInput = {
    id: number
    nombre?: string | null
    productos?: productosCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateInput = {
    id: number
    nombre?: string | null
    productos?: productosUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: productosUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: productosUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasCreateManyInput = {
    id: number
    nombre?: string | null
  }

  export type categoriasUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clientesCreateInput = {
    id: number
    nombre?: string | null
    direccion?: string | null
    telefono?: string | null
    compras?: comprasCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateInput = {
    id: number
    nombre?: string | null
    direccion?: string | null
    telefono?: string | null
    compras?: comprasUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    compras?: comprasUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    compras?: comprasUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type clientesCreateManyInput = {
    id: number
    nombre?: string | null
    direccion?: string | null
    telefono?: string | null
  }

  export type clientesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clientesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type comprasCreateInput = {
    id: number
    cantidad?: number | null
    fecha?: Date | string | null
    clientes?: clientesCreateNestedOneWithoutComprasInput
    productos?: productosCreateNestedOneWithoutComprasInput
  }

  export type comprasUncheckedCreateInput = {
    id: number
    cliente_id?: number | null
    producto_id?: number | null
    cantidad?: number | null
    fecha?: Date | string | null
  }

  export type comprasUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientes?: clientesUpdateOneWithoutComprasNestedInput
    productos?: productosUpdateOneWithoutComprasNestedInput
  }

  export type comprasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: NullableIntFieldUpdateOperationsInput | number | null
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comprasCreateManyInput = {
    id: number
    cliente_id?: number | null
    producto_id?: number | null
    cantidad?: number | null
    fecha?: Date | string | null
  }

  export type comprasUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comprasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: NullableIntFieldUpdateOperationsInput | number | null
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productosCreateInput = {
    id: number
    nombre?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    descripcion?: string | null
    compras?: comprasCreateNestedManyWithoutProductosInput
    categorias?: categoriasCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateInput = {
    id: number
    nombre?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    descripcion?: string | null
    categoria_id?: number | null
    compras?: comprasUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    compras?: comprasUpdateManyWithoutProductosNestedInput
    categorias?: categoriasUpdateOneWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    compras?: comprasUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosCreateManyInput = {
    id: number
    nombre?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    descripcion?: string | null
    categoria_id?: number | null
  }

  export type productosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type ProductosListRelationFilter = {
    every?: productosWhereInput
    some?: productosWhereInput
    none?: productosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type ComprasListRelationFilter = {
    every?: comprasWhereInput
    some?: comprasWhereInput
    none?: comprasWhereInput
  }

  export type comprasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
  }

  export type clientesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
  }

  export type clientesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type ClientesRelationFilter = {
    is?: clientesWhereInput | null
    isNot?: clientesWhereInput | null
  }

  export type ProductosRelationFilter = {
    is?: productosWhereInput | null
    isNot?: productosWhereInput | null
  }

  export type comprasCountOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
  }

  export type comprasAvgOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
  }

  export type comprasMaxOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
  }

  export type comprasMinOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    fecha?: SortOrder
  }

  export type comprasSumOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type CategoriasRelationFilter = {
    is?: categoriasWhereInput | null
    isNot?: categoriasWhereInput | null
  }

  export type productosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    descripcion?: SortOrder
    categoria_id?: SortOrder
  }

  export type productosAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    categoria_id?: SortOrder
  }

  export type productosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    descripcion?: SortOrder
    categoria_id?: SortOrder
  }

  export type productosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    descripcion?: SortOrder
    categoria_id?: SortOrder
  }

  export type productosSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    categoria_id?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type productosCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<Enumerable<productosCreateWithoutCategoriasInput>, Enumerable<productosUncheckedCreateWithoutCategoriasInput>>
    connectOrCreate?: Enumerable<productosCreateOrConnectWithoutCategoriasInput>
    createMany?: productosCreateManyCategoriasInputEnvelope
    connect?: Enumerable<productosWhereUniqueInput>
  }

  export type productosUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<Enumerable<productosCreateWithoutCategoriasInput>, Enumerable<productosUncheckedCreateWithoutCategoriasInput>>
    connectOrCreate?: Enumerable<productosCreateOrConnectWithoutCategoriasInput>
    createMany?: productosCreateManyCategoriasInputEnvelope
    connect?: Enumerable<productosWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type productosUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<Enumerable<productosCreateWithoutCategoriasInput>, Enumerable<productosUncheckedCreateWithoutCategoriasInput>>
    connectOrCreate?: Enumerable<productosCreateOrConnectWithoutCategoriasInput>
    upsert?: Enumerable<productosUpsertWithWhereUniqueWithoutCategoriasInput>
    createMany?: productosCreateManyCategoriasInputEnvelope
    set?: Enumerable<productosWhereUniqueInput>
    disconnect?: Enumerable<productosWhereUniqueInput>
    delete?: Enumerable<productosWhereUniqueInput>
    connect?: Enumerable<productosWhereUniqueInput>
    update?: Enumerable<productosUpdateWithWhereUniqueWithoutCategoriasInput>
    updateMany?: Enumerable<productosUpdateManyWithWhereWithoutCategoriasInput>
    deleteMany?: Enumerable<productosScalarWhereInput>
  }

  export type productosUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<Enumerable<productosCreateWithoutCategoriasInput>, Enumerable<productosUncheckedCreateWithoutCategoriasInput>>
    connectOrCreate?: Enumerable<productosCreateOrConnectWithoutCategoriasInput>
    upsert?: Enumerable<productosUpsertWithWhereUniqueWithoutCategoriasInput>
    createMany?: productosCreateManyCategoriasInputEnvelope
    set?: Enumerable<productosWhereUniqueInput>
    disconnect?: Enumerable<productosWhereUniqueInput>
    delete?: Enumerable<productosWhereUniqueInput>
    connect?: Enumerable<productosWhereUniqueInput>
    update?: Enumerable<productosUpdateWithWhereUniqueWithoutCategoriasInput>
    updateMany?: Enumerable<productosUpdateManyWithWhereWithoutCategoriasInput>
    deleteMany?: Enumerable<productosScalarWhereInput>
  }

  export type comprasCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<comprasCreateWithoutClientesInput>, Enumerable<comprasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<comprasCreateOrConnectWithoutClientesInput>
    createMany?: comprasCreateManyClientesInputEnvelope
    connect?: Enumerable<comprasWhereUniqueInput>
  }

  export type comprasUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<Enumerable<comprasCreateWithoutClientesInput>, Enumerable<comprasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<comprasCreateOrConnectWithoutClientesInput>
    createMany?: comprasCreateManyClientesInputEnvelope
    connect?: Enumerable<comprasWhereUniqueInput>
  }

  export type comprasUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<comprasCreateWithoutClientesInput>, Enumerable<comprasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<comprasCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<comprasUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: comprasCreateManyClientesInputEnvelope
    set?: Enumerable<comprasWhereUniqueInput>
    disconnect?: Enumerable<comprasWhereUniqueInput>
    delete?: Enumerable<comprasWhereUniqueInput>
    connect?: Enumerable<comprasWhereUniqueInput>
    update?: Enumerable<comprasUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<comprasUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<comprasScalarWhereInput>
  }

  export type comprasUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<Enumerable<comprasCreateWithoutClientesInput>, Enumerable<comprasUncheckedCreateWithoutClientesInput>>
    connectOrCreate?: Enumerable<comprasCreateOrConnectWithoutClientesInput>
    upsert?: Enumerable<comprasUpsertWithWhereUniqueWithoutClientesInput>
    createMany?: comprasCreateManyClientesInputEnvelope
    set?: Enumerable<comprasWhereUniqueInput>
    disconnect?: Enumerable<comprasWhereUniqueInput>
    delete?: Enumerable<comprasWhereUniqueInput>
    connect?: Enumerable<comprasWhereUniqueInput>
    update?: Enumerable<comprasUpdateWithWhereUniqueWithoutClientesInput>
    updateMany?: Enumerable<comprasUpdateManyWithWhereWithoutClientesInput>
    deleteMany?: Enumerable<comprasScalarWhereInput>
  }

  export type clientesCreateNestedOneWithoutComprasInput = {
    create?: XOR<clientesCreateWithoutComprasInput, clientesUncheckedCreateWithoutComprasInput>
    connectOrCreate?: clientesCreateOrConnectWithoutComprasInput
    connect?: clientesWhereUniqueInput
  }

  export type productosCreateNestedOneWithoutComprasInput = {
    create?: XOR<productosCreateWithoutComprasInput, productosUncheckedCreateWithoutComprasInput>
    connectOrCreate?: productosCreateOrConnectWithoutComprasInput
    connect?: productosWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type clientesUpdateOneWithoutComprasNestedInput = {
    create?: XOR<clientesCreateWithoutComprasInput, clientesUncheckedCreateWithoutComprasInput>
    connectOrCreate?: clientesCreateOrConnectWithoutComprasInput
    upsert?: clientesUpsertWithoutComprasInput
    disconnect?: boolean
    delete?: boolean
    connect?: clientesWhereUniqueInput
    update?: XOR<clientesUpdateWithoutComprasInput, clientesUncheckedUpdateWithoutComprasInput>
  }

  export type productosUpdateOneWithoutComprasNestedInput = {
    create?: XOR<productosCreateWithoutComprasInput, productosUncheckedCreateWithoutComprasInput>
    connectOrCreate?: productosCreateOrConnectWithoutComprasInput
    upsert?: productosUpsertWithoutComprasInput
    disconnect?: boolean
    delete?: boolean
    connect?: productosWhereUniqueInput
    update?: XOR<productosUpdateWithoutComprasInput, productosUncheckedUpdateWithoutComprasInput>
  }

  export type comprasCreateNestedManyWithoutProductosInput = {
    create?: XOR<Enumerable<comprasCreateWithoutProductosInput>, Enumerable<comprasUncheckedCreateWithoutProductosInput>>
    connectOrCreate?: Enumerable<comprasCreateOrConnectWithoutProductosInput>
    createMany?: comprasCreateManyProductosInputEnvelope
    connect?: Enumerable<comprasWhereUniqueInput>
  }

  export type categoriasCreateNestedOneWithoutProductosInput = {
    create?: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductosInput
    connect?: categoriasWhereUniqueInput
  }

  export type comprasUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<Enumerable<comprasCreateWithoutProductosInput>, Enumerable<comprasUncheckedCreateWithoutProductosInput>>
    connectOrCreate?: Enumerable<comprasCreateOrConnectWithoutProductosInput>
    createMany?: comprasCreateManyProductosInputEnvelope
    connect?: Enumerable<comprasWhereUniqueInput>
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type comprasUpdateManyWithoutProductosNestedInput = {
    create?: XOR<Enumerable<comprasCreateWithoutProductosInput>, Enumerable<comprasUncheckedCreateWithoutProductosInput>>
    connectOrCreate?: Enumerable<comprasCreateOrConnectWithoutProductosInput>
    upsert?: Enumerable<comprasUpsertWithWhereUniqueWithoutProductosInput>
    createMany?: comprasCreateManyProductosInputEnvelope
    set?: Enumerable<comprasWhereUniqueInput>
    disconnect?: Enumerable<comprasWhereUniqueInput>
    delete?: Enumerable<comprasWhereUniqueInput>
    connect?: Enumerable<comprasWhereUniqueInput>
    update?: Enumerable<comprasUpdateWithWhereUniqueWithoutProductosInput>
    updateMany?: Enumerable<comprasUpdateManyWithWhereWithoutProductosInput>
    deleteMany?: Enumerable<comprasScalarWhereInput>
  }

  export type categoriasUpdateOneWithoutProductosNestedInput = {
    create?: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductosInput
    upsert?: categoriasUpsertWithoutProductosInput
    disconnect?: boolean
    delete?: boolean
    connect?: categoriasWhereUniqueInput
    update?: XOR<categoriasUpdateWithoutProductosInput, categoriasUncheckedUpdateWithoutProductosInput>
  }

  export type comprasUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<Enumerable<comprasCreateWithoutProductosInput>, Enumerable<comprasUncheckedCreateWithoutProductosInput>>
    connectOrCreate?: Enumerable<comprasCreateOrConnectWithoutProductosInput>
    upsert?: Enumerable<comprasUpsertWithWhereUniqueWithoutProductosInput>
    createMany?: comprasCreateManyProductosInputEnvelope
    set?: Enumerable<comprasWhereUniqueInput>
    disconnect?: Enumerable<comprasWhereUniqueInput>
    delete?: Enumerable<comprasWhereUniqueInput>
    connect?: Enumerable<comprasWhereUniqueInput>
    update?: Enumerable<comprasUpdateWithWhereUniqueWithoutProductosInput>
    updateMany?: Enumerable<comprasUpdateManyWithWhereWithoutProductosInput>
    deleteMany?: Enumerable<comprasScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type productosCreateWithoutCategoriasInput = {
    id: number
    nombre?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    descripcion?: string | null
    compras?: comprasCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutCategoriasInput = {
    id: number
    nombre?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    descripcion?: string | null
    compras?: comprasUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput>
  }

  export type productosCreateManyCategoriasInputEnvelope = {
    data: Enumerable<productosCreateManyCategoriasInput>
    skipDuplicates?: boolean
  }

  export type productosUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    update: XOR<productosUpdateWithoutCategoriasInput, productosUncheckedUpdateWithoutCategoriasInput>
    create: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput>
  }

  export type productosUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    data: XOR<productosUpdateWithoutCategoriasInput, productosUncheckedUpdateWithoutCategoriasInput>
  }

  export type productosUpdateManyWithWhereWithoutCategoriasInput = {
    where: productosScalarWhereInput
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyWithoutProductosInput>
  }

  export type productosScalarWhereInput = {
    AND?: Enumerable<productosScalarWhereInput>
    OR?: Enumerable<productosScalarWhereInput>
    NOT?: Enumerable<productosScalarWhereInput>
    id?: IntFilter | number
    nombre?: StringNullableFilter | string | null
    precio?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    descripcion?: StringNullableFilter | string | null
    categoria_id?: IntNullableFilter | number | null
  }

  export type comprasCreateWithoutClientesInput = {
    id: number
    cantidad?: number | null
    fecha?: Date | string | null
    productos?: productosCreateNestedOneWithoutComprasInput
  }

  export type comprasUncheckedCreateWithoutClientesInput = {
    id: number
    producto_id?: number | null
    cantidad?: number | null
    fecha?: Date | string | null
  }

  export type comprasCreateOrConnectWithoutClientesInput = {
    where: comprasWhereUniqueInput
    create: XOR<comprasCreateWithoutClientesInput, comprasUncheckedCreateWithoutClientesInput>
  }

  export type comprasCreateManyClientesInputEnvelope = {
    data: Enumerable<comprasCreateManyClientesInput>
    skipDuplicates?: boolean
  }

  export type comprasUpsertWithWhereUniqueWithoutClientesInput = {
    where: comprasWhereUniqueInput
    update: XOR<comprasUpdateWithoutClientesInput, comprasUncheckedUpdateWithoutClientesInput>
    create: XOR<comprasCreateWithoutClientesInput, comprasUncheckedCreateWithoutClientesInput>
  }

  export type comprasUpdateWithWhereUniqueWithoutClientesInput = {
    where: comprasWhereUniqueInput
    data: XOR<comprasUpdateWithoutClientesInput, comprasUncheckedUpdateWithoutClientesInput>
  }

  export type comprasUpdateManyWithWhereWithoutClientesInput = {
    where: comprasScalarWhereInput
    data: XOR<comprasUpdateManyMutationInput, comprasUncheckedUpdateManyWithoutComprasInput>
  }

  export type comprasScalarWhereInput = {
    AND?: Enumerable<comprasScalarWhereInput>
    OR?: Enumerable<comprasScalarWhereInput>
    NOT?: Enumerable<comprasScalarWhereInput>
    id?: IntFilter | number
    cliente_id?: IntNullableFilter | number | null
    producto_id?: IntNullableFilter | number | null
    cantidad?: IntNullableFilter | number | null
    fecha?: DateTimeNullableFilter | Date | string | null
  }

  export type clientesCreateWithoutComprasInput = {
    id: number
    nombre?: string | null
    direccion?: string | null
    telefono?: string | null
  }

  export type clientesUncheckedCreateWithoutComprasInput = {
    id: number
    nombre?: string | null
    direccion?: string | null
    telefono?: string | null
  }

  export type clientesCreateOrConnectWithoutComprasInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutComprasInput, clientesUncheckedCreateWithoutComprasInput>
  }

  export type productosCreateWithoutComprasInput = {
    id: number
    nombre?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    descripcion?: string | null
    categorias?: categoriasCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutComprasInput = {
    id: number
    nombre?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    descripcion?: string | null
    categoria_id?: number | null
  }

  export type productosCreateOrConnectWithoutComprasInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutComprasInput, productosUncheckedCreateWithoutComprasInput>
  }

  export type clientesUpsertWithoutComprasInput = {
    update: XOR<clientesUpdateWithoutComprasInput, clientesUncheckedUpdateWithoutComprasInput>
    create: XOR<clientesCreateWithoutComprasInput, clientesUncheckedCreateWithoutComprasInput>
  }

  export type clientesUpdateWithoutComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clientesUncheckedUpdateWithoutComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productosUpsertWithoutComprasInput = {
    update: XOR<productosUpdateWithoutComprasInput, productosUncheckedUpdateWithoutComprasInput>
    create: XOR<productosCreateWithoutComprasInput, productosUncheckedCreateWithoutComprasInput>
  }

  export type productosUpdateWithoutComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categorias?: categoriasUpdateOneWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comprasCreateWithoutProductosInput = {
    id: number
    cantidad?: number | null
    fecha?: Date | string | null
    clientes?: clientesCreateNestedOneWithoutComprasInput
  }

  export type comprasUncheckedCreateWithoutProductosInput = {
    id: number
    cliente_id?: number | null
    cantidad?: number | null
    fecha?: Date | string | null
  }

  export type comprasCreateOrConnectWithoutProductosInput = {
    where: comprasWhereUniqueInput
    create: XOR<comprasCreateWithoutProductosInput, comprasUncheckedCreateWithoutProductosInput>
  }

  export type comprasCreateManyProductosInputEnvelope = {
    data: Enumerable<comprasCreateManyProductosInput>
    skipDuplicates?: boolean
  }

  export type categoriasCreateWithoutProductosInput = {
    id: number
    nombre?: string | null
  }

  export type categoriasUncheckedCreateWithoutProductosInput = {
    id: number
    nombre?: string | null
  }

  export type categoriasCreateOrConnectWithoutProductosInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
  }

  export type comprasUpsertWithWhereUniqueWithoutProductosInput = {
    where: comprasWhereUniqueInput
    update: XOR<comprasUpdateWithoutProductosInput, comprasUncheckedUpdateWithoutProductosInput>
    create: XOR<comprasCreateWithoutProductosInput, comprasUncheckedCreateWithoutProductosInput>
  }

  export type comprasUpdateWithWhereUniqueWithoutProductosInput = {
    where: comprasWhereUniqueInput
    data: XOR<comprasUpdateWithoutProductosInput, comprasUncheckedUpdateWithoutProductosInput>
  }

  export type comprasUpdateManyWithWhereWithoutProductosInput = {
    where: comprasScalarWhereInput
    data: XOR<comprasUpdateManyMutationInput, comprasUncheckedUpdateManyWithoutComprasInput>
  }

  export type categoriasUpsertWithoutProductosInput = {
    update: XOR<categoriasUpdateWithoutProductosInput, categoriasUncheckedUpdateWithoutProductosInput>
    create: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
  }

  export type categoriasUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriasUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productosCreateManyCategoriasInput = {
    id: number
    nombre?: string | null
    precio?: Decimal | DecimalJsLike | number | string | null
    descripcion?: string | null
  }

  export type productosUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    compras?: comprasUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    compras?: comprasUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateManyWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type comprasCreateManyClientesInput = {
    id: number
    producto_id?: number | null
    cantidad?: number | null
    fecha?: Date | string | null
  }

  export type comprasUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: productosUpdateOneWithoutComprasNestedInput
  }

  export type comprasUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comprasUncheckedUpdateManyWithoutComprasInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type comprasCreateManyProductosInput = {
    id: number
    cliente_id?: number | null
    cantidad?: number | null
    fecha?: Date | string | null
  }

  export type comprasUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientes?: clientesUpdateOneWithoutComprasNestedInput
  }

  export type comprasUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}