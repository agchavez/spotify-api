
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type usuarioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    favoritas: cancionesFavoritasPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    nombre: string
    apellido: string
    email: string
  }, ExtArgs["result"]["usuario"]>
  composites: {}
}

/**
 * Model usuario
 * 
 */
export type usuario = runtime.Types.DefaultSelection<usuarioPayload>
export type cancionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    favoritas: cancionesFavoritasPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    titulo: string
    artista: string
    duracion: string
  }, ExtArgs["result"]["cancion"]>
  composites: {}
}

/**
 * Model cancion
 * 
 */
export type cancion = runtime.Types.DefaultSelection<cancionPayload>
export type cancionesFavoritasPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  objects: {
    usuario: usuarioPayload<ExtArgs>
    cancion: cancionPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: number
    idUsuario: number
    idCancion: number
    fechaRegistro: Date
  }, ExtArgs["result"]["cancionesFavoritas"]>
  composites: {}
}

/**
 * Model cancionesFavoritas
 * 
 */
export type cancionesFavoritas = runtime.Types.DefaultSelection<cancionesFavoritasPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cancion`: Exposes CRUD operations for the **cancion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cancions
    * const cancions = await prisma.cancion.findMany()
    * ```
    */
  get cancion(): Prisma.cancionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cancionesFavoritas`: Exposes CRUD operations for the **cancionesFavoritas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CancionesFavoritas
    * const cancionesFavoritas = await prisma.cancionesFavoritas.findMany()
    * ```
    */
  get cancionesFavoritas(): Prisma.cancionesFavoritasDelegate<GlobalReject, ExtArgs>;
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
    usuario: 'usuario',
    cancion: 'cancion',
    cancionesFavoritas: 'cancionesFavoritas'
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
      modelProps: 'usuario' | 'cancion' | 'cancionesFavoritas'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      usuario: {
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usuarioPayload> | null
            payload: usuarioPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usuarioPayload>
            payload: usuarioPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usuarioPayload> | null
            payload: usuarioPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usuarioPayload>
            payload: usuarioPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usuarioPayload>[]
            payload: usuarioPayload<ExtArgs>
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usuarioPayload>
            payload: usuarioPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: usuarioPayload<ExtArgs>
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usuarioPayload>
            payload: usuarioPayload<ExtArgs>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usuarioPayload>
            payload: usuarioPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: usuarioPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: usuarioPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<usuarioPayload>
            payload: usuarioPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
            payload: usuarioPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
            payload: usuarioPayload<ExtArgs>
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
            payload: usuarioPayload<ExtArgs>
          }
        }
      }
      cancion: {
        operations: {
          findUnique: {
            args: Prisma.cancionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionPayload> | null
            payload: cancionPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.cancionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionPayload>
            payload: cancionPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.cancionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionPayload> | null
            payload: cancionPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.cancionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionPayload>
            payload: cancionPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.cancionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionPayload>[]
            payload: cancionPayload<ExtArgs>
          }
          create: {
            args: Prisma.cancionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionPayload>
            payload: cancionPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.cancionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cancionPayload<ExtArgs>
          }
          delete: {
            args: Prisma.cancionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionPayload>
            payload: cancionPayload<ExtArgs>
          }
          update: {
            args: Prisma.cancionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionPayload>
            payload: cancionPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.cancionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cancionPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.cancionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cancionPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.cancionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionPayload>
            payload: cancionPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CancionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCancion>
            payload: cancionPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.CancionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CancionGroupByOutputType>[]
            payload: cancionPayload<ExtArgs>
          }
          count: {
            args: Prisma.cancionCountArgs<ExtArgs>,
            result: $Utils.Optional<CancionCountAggregateOutputType> | number
            payload: cancionPayload<ExtArgs>
          }
        }
      }
      cancionesFavoritas: {
        operations: {
          findUnique: {
            args: Prisma.cancionesFavoritasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionesFavoritasPayload> | null
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          findUniqueOrThrow: {
            args: Prisma.cancionesFavoritasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionesFavoritasPayload>
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          findFirst: {
            args: Prisma.cancionesFavoritasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionesFavoritasPayload> | null
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          findFirstOrThrow: {
            args: Prisma.cancionesFavoritasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionesFavoritasPayload>
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          findMany: {
            args: Prisma.cancionesFavoritasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionesFavoritasPayload>[]
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          create: {
            args: Prisma.cancionesFavoritasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionesFavoritasPayload>
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          createMany: {
            args: Prisma.cancionesFavoritasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          delete: {
            args: Prisma.cancionesFavoritasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionesFavoritasPayload>
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          update: {
            args: Prisma.cancionesFavoritasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionesFavoritasPayload>
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          deleteMany: {
            args: Prisma.cancionesFavoritasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          updateMany: {
            args: Prisma.cancionesFavoritasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          upsert: {
            args: Prisma.cancionesFavoritasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cancionesFavoritasPayload>
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          aggregate: {
            args: Prisma.CancionesFavoritasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCancionesFavoritas>
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          groupBy: {
            args: Prisma.CancionesFavoritasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CancionesFavoritasGroupByOutputType>[]
            payload: cancionesFavoritasPayload<ExtArgs>
          }
          count: {
            args: Prisma.cancionesFavoritasCountArgs<ExtArgs>,
            result: $Utils.Optional<CancionesFavoritasCountAggregateOutputType> | number
            payload: cancionesFavoritasPayload<ExtArgs>
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
   * Count Type UsuarioCountOutputType
   */


  export type UsuarioCountOutputType = {
    favoritas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    favoritas?: boolean | UsuarioCountOutputTypeCountFavoritasArgs
  }

  // Custom InputTypes

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFavoritasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: cancionesFavoritasWhereInput
  }



  /**
   * Count Type CancionCountOutputType
   */


  export type CancionCountOutputType = {
    favoritas: number
  }

  export type CancionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    favoritas?: boolean | CancionCountOutputTypeCountFavoritasArgs
  }

  // Custom InputTypes

  /**
   * CancionCountOutputType without action
   */
  export type CancionCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionCountOutputType
     */
    select?: CancionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CancionCountOutputType without action
   */
  export type CancionCountOutputTypeCountFavoritasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: cancionesFavoritasWhereInput
  }



  /**
   * Models
   */

  /**
   * Model usuario
   */


  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    email: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: Enumerable<usuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: Enumerable<usuarioOrderByWithAggregationInput>
    by: UsuarioScalarFieldEnum[]
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }


  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    email: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    favoritas?: boolean | usuario$favoritasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
  }

  export type usuarioInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    favoritas?: boolean | usuario$favoritasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeArgs<ExtArgs>
  }


  type usuarioGetPayload<S extends boolean | null | undefined | usuarioArgs> = $Types.GetResult<usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<usuarioFindManyArgs, 'select' | 'include'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usuarioFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'usuario'> extends True ? Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usuarioFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'usuario'> extends True ? Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends usuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends usuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends usuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>
    ): Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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

    favoritas<T extends usuario$favoritasArgs<ExtArgs> = {}>(args?: Subset<T, usuario$favoritasArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
   * usuario base type for findUnique actions
   */
  export type usuarioFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUnique
   */
  export interface usuarioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends usuarioFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }


  /**
   * usuario base type for findFirst actions
   */
  export type usuarioFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: Enumerable<usuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }

  /**
   * usuario findFirst
   */
  export interface usuarioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends usuarioFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: Enumerable<usuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }


  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: Enumerable<usuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }


  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }


  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: Enumerable<usuarioCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }


  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
  }


  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }


  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }


  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
  }


  /**
   * usuario.favoritas
   */
  export type usuario$favoritasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    where?: cancionesFavoritasWhereInput
    orderBy?: Enumerable<cancionesFavoritasOrderByWithRelationInput>
    cursor?: cancionesFavoritasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CancionesFavoritasScalarFieldEnum>
  }


  /**
   * usuario without action
   */
  export type usuarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usuarioInclude<ExtArgs> | null
  }



  /**
   * Model cancion
   */


  export type AggregateCancion = {
    _count: CancionCountAggregateOutputType | null
    _avg: CancionAvgAggregateOutputType | null
    _sum: CancionSumAggregateOutputType | null
    _min: CancionMinAggregateOutputType | null
    _max: CancionMaxAggregateOutputType | null
  }

  export type CancionAvgAggregateOutputType = {
    id: number | null
  }

  export type CancionSumAggregateOutputType = {
    id: number | null
  }

  export type CancionMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    artista: string | null
    duracion: string | null
  }

  export type CancionMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    artista: string | null
    duracion: string | null
  }

  export type CancionCountAggregateOutputType = {
    id: number
    titulo: number
    artista: number
    duracion: number
    _all: number
  }


  export type CancionAvgAggregateInputType = {
    id?: true
  }

  export type CancionSumAggregateInputType = {
    id?: true
  }

  export type CancionMinAggregateInputType = {
    id?: true
    titulo?: true
    artista?: true
    duracion?: true
  }

  export type CancionMaxAggregateInputType = {
    id?: true
    titulo?: true
    artista?: true
    duracion?: true
  }

  export type CancionCountAggregateInputType = {
    id?: true
    titulo?: true
    artista?: true
    duracion?: true
    _all?: true
  }

  export type CancionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cancion to aggregate.
     */
    where?: cancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancions to fetch.
     */
    orderBy?: Enumerable<cancionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cancions
    **/
    _count?: true | CancionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CancionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CancionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CancionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CancionMaxAggregateInputType
  }

  export type GetCancionAggregateType<T extends CancionAggregateArgs> = {
        [P in keyof T & keyof AggregateCancion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCancion[P]>
      : GetScalarType<T[P], AggregateCancion[P]>
  }




  export type CancionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: cancionWhereInput
    orderBy?: Enumerable<cancionOrderByWithAggregationInput>
    by: CancionScalarFieldEnum[]
    having?: cancionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CancionCountAggregateInputType | true
    _avg?: CancionAvgAggregateInputType
    _sum?: CancionSumAggregateInputType
    _min?: CancionMinAggregateInputType
    _max?: CancionMaxAggregateInputType
  }


  export type CancionGroupByOutputType = {
    id: number
    titulo: string
    artista: string
    duracion: string
    _count: CancionCountAggregateOutputType | null
    _avg: CancionAvgAggregateOutputType | null
    _sum: CancionSumAggregateOutputType | null
    _min: CancionMinAggregateOutputType | null
    _max: CancionMaxAggregateOutputType | null
  }

  type GetCancionGroupByPayload<T extends CancionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CancionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CancionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CancionGroupByOutputType[P]>
            : GetScalarType<T[P], CancionGroupByOutputType[P]>
        }
      >
    >


  export type cancionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    artista?: boolean
    duracion?: boolean
    favoritas?: boolean | cancion$favoritasArgs<ExtArgs>
    _count?: boolean | CancionCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["cancion"]>

  export type cancionSelectScalar = {
    id?: boolean
    titulo?: boolean
    artista?: boolean
    duracion?: boolean
  }

  export type cancionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    favoritas?: boolean | cancion$favoritasArgs<ExtArgs>
    _count?: boolean | CancionCountOutputTypeArgs<ExtArgs>
  }


  type cancionGetPayload<S extends boolean | null | undefined | cancionArgs> = $Types.GetResult<cancionPayload, S>

  type cancionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<cancionFindManyArgs, 'select' | 'include'> & {
      select?: CancionCountAggregateInputType | true
    }

  export interface cancionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cancion'], meta: { name: 'cancion' } }
    /**
     * Find zero or one Cancion that matches the filter.
     * @param {cancionFindUniqueArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cancionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cancionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cancion'> extends True ? Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Cancion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cancionFindUniqueOrThrowArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cancionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cancionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Cancion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionFindFirstArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cancionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cancionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cancion'> extends True ? Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Cancion that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionFindFirstOrThrowArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cancionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cancionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Cancions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cancions
     * const cancions = await prisma.cancion.findMany()
     * 
     * // Get first 10 Cancions
     * const cancions = await prisma.cancion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cancionWithIdOnly = await prisma.cancion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cancionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cancionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<cancionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Cancion.
     * @param {cancionCreateArgs} args - Arguments to create a Cancion.
     * @example
     * // Create one Cancion
     * const Cancion = await prisma.cancion.create({
     *   data: {
     *     // ... data to create a Cancion
     *   }
     * })
     * 
    **/
    create<T extends cancionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cancionCreateArgs<ExtArgs>>
    ): Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Cancions.
     *     @param {cancionCreateManyArgs} args - Arguments to create many Cancions.
     *     @example
     *     // Create many Cancions
     *     const cancion = await prisma.cancion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cancionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cancionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cancion.
     * @param {cancionDeleteArgs} args - Arguments to delete one Cancion.
     * @example
     * // Delete one Cancion
     * const Cancion = await prisma.cancion.delete({
     *   where: {
     *     // ... filter to delete one Cancion
     *   }
     * })
     * 
    **/
    delete<T extends cancionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cancionDeleteArgs<ExtArgs>>
    ): Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Cancion.
     * @param {cancionUpdateArgs} args - Arguments to update one Cancion.
     * @example
     * // Update one Cancion
     * const cancion = await prisma.cancion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cancionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cancionUpdateArgs<ExtArgs>>
    ): Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Cancions.
     * @param {cancionDeleteManyArgs} args - Arguments to filter Cancions to delete.
     * @example
     * // Delete a few Cancions
     * const { count } = await prisma.cancion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cancionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cancionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cancions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cancions
     * const cancion = await prisma.cancion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cancionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cancionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cancion.
     * @param {cancionUpsertArgs} args - Arguments to update or create a Cancion.
     * @example
     * // Update or create a Cancion
     * const cancion = await prisma.cancion.upsert({
     *   create: {
     *     // ... data to create a Cancion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cancion we want to update
     *   }
     * })
    **/
    upsert<T extends cancionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cancionUpsertArgs<ExtArgs>>
    ): Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Cancions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionCountArgs} args - Arguments to filter Cancions to count.
     * @example
     * // Count the number of Cancions
     * const count = await prisma.cancion.count({
     *   where: {
     *     // ... the filter for the Cancions we want to count
     *   }
     * })
    **/
    count<T extends cancionCountArgs>(
      args?: Subset<T, cancionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CancionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cancion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CancionAggregateArgs>(args: Subset<T, CancionAggregateArgs>): Prisma.PrismaPromise<GetCancionAggregateType<T>>

    /**
     * Group by Cancion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionGroupByArgs} args - Group by arguments.
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
      T extends CancionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CancionGroupByArgs['orderBy'] }
        : { orderBy?: CancionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CancionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCancionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for cancion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cancionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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

    favoritas<T extends cancion$favoritasArgs<ExtArgs> = {}>(args?: Subset<T, cancion$favoritasArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
   * cancion base type for findUnique actions
   */
  export type cancionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter, which cancion to fetch.
     */
    where: cancionWhereUniqueInput
  }

  /**
   * cancion findUnique
   */
  export interface cancionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cancionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cancion findUniqueOrThrow
   */
  export type cancionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter, which cancion to fetch.
     */
    where: cancionWhereUniqueInput
  }


  /**
   * cancion base type for findFirst actions
   */
  export type cancionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter, which cancion to fetch.
     */
    where?: cancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancions to fetch.
     */
    orderBy?: Enumerable<cancionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cancions.
     */
    cursor?: cancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cancions.
     */
    distinct?: Enumerable<CancionScalarFieldEnum>
  }

  /**
   * cancion findFirst
   */
  export interface cancionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cancionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cancion findFirstOrThrow
   */
  export type cancionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter, which cancion to fetch.
     */
    where?: cancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancions to fetch.
     */
    orderBy?: Enumerable<cancionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cancions.
     */
    cursor?: cancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cancions.
     */
    distinct?: Enumerable<CancionScalarFieldEnum>
  }


  /**
   * cancion findMany
   */
  export type cancionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter, which cancions to fetch.
     */
    where?: cancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancions to fetch.
     */
    orderBy?: Enumerable<cancionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cancions.
     */
    cursor?: cancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancions.
     */
    skip?: number
    distinct?: Enumerable<CancionScalarFieldEnum>
  }


  /**
   * cancion create
   */
  export type cancionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * The data needed to create a cancion.
     */
    data: XOR<cancionCreateInput, cancionUncheckedCreateInput>
  }


  /**
   * cancion createMany
   */
  export type cancionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cancions.
     */
    data: Enumerable<cancionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * cancion update
   */
  export type cancionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * The data needed to update a cancion.
     */
    data: XOR<cancionUpdateInput, cancionUncheckedUpdateInput>
    /**
     * Choose, which cancion to update.
     */
    where: cancionWhereUniqueInput
  }


  /**
   * cancion updateMany
   */
  export type cancionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cancions.
     */
    data: XOR<cancionUpdateManyMutationInput, cancionUncheckedUpdateManyInput>
    /**
     * Filter which cancions to update
     */
    where?: cancionWhereInput
  }


  /**
   * cancion upsert
   */
  export type cancionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * The filter to search for the cancion to update in case it exists.
     */
    where: cancionWhereUniqueInput
    /**
     * In case the cancion found by the `where` argument doesn't exist, create a new cancion with this data.
     */
    create: XOR<cancionCreateInput, cancionUncheckedCreateInput>
    /**
     * In case the cancion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cancionUpdateInput, cancionUncheckedUpdateInput>
  }


  /**
   * cancion delete
   */
  export type cancionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionInclude<ExtArgs> | null
    /**
     * Filter which cancion to delete.
     */
    where: cancionWhereUniqueInput
  }


  /**
   * cancion deleteMany
   */
  export type cancionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cancions to delete
     */
    where?: cancionWhereInput
  }


  /**
   * cancion.favoritas
   */
  export type cancion$favoritasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    where?: cancionesFavoritasWhereInput
    orderBy?: Enumerable<cancionesFavoritasOrderByWithRelationInput>
    cursor?: cancionesFavoritasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CancionesFavoritasScalarFieldEnum>
  }


  /**
   * cancion without action
   */
  export type cancionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancion
     */
    select?: cancionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionInclude<ExtArgs> | null
  }



  /**
   * Model cancionesFavoritas
   */


  export type AggregateCancionesFavoritas = {
    _count: CancionesFavoritasCountAggregateOutputType | null
    _avg: CancionesFavoritasAvgAggregateOutputType | null
    _sum: CancionesFavoritasSumAggregateOutputType | null
    _min: CancionesFavoritasMinAggregateOutputType | null
    _max: CancionesFavoritasMaxAggregateOutputType | null
  }

  export type CancionesFavoritasAvgAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    idCancion: number | null
  }

  export type CancionesFavoritasSumAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    idCancion: number | null
  }

  export type CancionesFavoritasMinAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    idCancion: number | null
    fechaRegistro: Date | null
  }

  export type CancionesFavoritasMaxAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    idCancion: number | null
    fechaRegistro: Date | null
  }

  export type CancionesFavoritasCountAggregateOutputType = {
    id: number
    idUsuario: number
    idCancion: number
    fechaRegistro: number
    _all: number
  }


  export type CancionesFavoritasAvgAggregateInputType = {
    id?: true
    idUsuario?: true
    idCancion?: true
  }

  export type CancionesFavoritasSumAggregateInputType = {
    id?: true
    idUsuario?: true
    idCancion?: true
  }

  export type CancionesFavoritasMinAggregateInputType = {
    id?: true
    idUsuario?: true
    idCancion?: true
    fechaRegistro?: true
  }

  export type CancionesFavoritasMaxAggregateInputType = {
    id?: true
    idUsuario?: true
    idCancion?: true
    fechaRegistro?: true
  }

  export type CancionesFavoritasCountAggregateInputType = {
    id?: true
    idUsuario?: true
    idCancion?: true
    fechaRegistro?: true
    _all?: true
  }

  export type CancionesFavoritasAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cancionesFavoritas to aggregate.
     */
    where?: cancionesFavoritasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancionesFavoritas to fetch.
     */
    orderBy?: Enumerable<cancionesFavoritasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cancionesFavoritasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancionesFavoritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancionesFavoritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cancionesFavoritas
    **/
    _count?: true | CancionesFavoritasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CancionesFavoritasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CancionesFavoritasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CancionesFavoritasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CancionesFavoritasMaxAggregateInputType
  }

  export type GetCancionesFavoritasAggregateType<T extends CancionesFavoritasAggregateArgs> = {
        [P in keyof T & keyof AggregateCancionesFavoritas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCancionesFavoritas[P]>
      : GetScalarType<T[P], AggregateCancionesFavoritas[P]>
  }




  export type CancionesFavoritasGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: cancionesFavoritasWhereInput
    orderBy?: Enumerable<cancionesFavoritasOrderByWithAggregationInput>
    by: CancionesFavoritasScalarFieldEnum[]
    having?: cancionesFavoritasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CancionesFavoritasCountAggregateInputType | true
    _avg?: CancionesFavoritasAvgAggregateInputType
    _sum?: CancionesFavoritasSumAggregateInputType
    _min?: CancionesFavoritasMinAggregateInputType
    _max?: CancionesFavoritasMaxAggregateInputType
  }


  export type CancionesFavoritasGroupByOutputType = {
    id: number
    idUsuario: number
    idCancion: number
    fechaRegistro: Date
    _count: CancionesFavoritasCountAggregateOutputType | null
    _avg: CancionesFavoritasAvgAggregateOutputType | null
    _sum: CancionesFavoritasSumAggregateOutputType | null
    _min: CancionesFavoritasMinAggregateOutputType | null
    _max: CancionesFavoritasMaxAggregateOutputType | null
  }

  type GetCancionesFavoritasGroupByPayload<T extends CancionesFavoritasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CancionesFavoritasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CancionesFavoritasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CancionesFavoritasGroupByOutputType[P]>
            : GetScalarType<T[P], CancionesFavoritasGroupByOutputType[P]>
        }
      >
    >


  export type cancionesFavoritasSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    idCancion?: boolean
    fechaRegistro?: boolean
    usuario?: boolean | usuarioArgs<ExtArgs>
    cancion?: boolean | cancionArgs<ExtArgs>
  }, ExtArgs["result"]["cancionesFavoritas"]>

  export type cancionesFavoritasSelectScalar = {
    id?: boolean
    idUsuario?: boolean
    idCancion?: boolean
    fechaRegistro?: boolean
  }

  export type cancionesFavoritasInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioArgs<ExtArgs>
    cancion?: boolean | cancionArgs<ExtArgs>
  }


  type cancionesFavoritasGetPayload<S extends boolean | null | undefined | cancionesFavoritasArgs> = $Types.GetResult<cancionesFavoritasPayload, S>

  type cancionesFavoritasCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<cancionesFavoritasFindManyArgs, 'select' | 'include'> & {
      select?: CancionesFavoritasCountAggregateInputType | true
    }

  export interface cancionesFavoritasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cancionesFavoritas'], meta: { name: 'cancionesFavoritas' } }
    /**
     * Find zero or one CancionesFavoritas that matches the filter.
     * @param {cancionesFavoritasFindUniqueArgs} args - Arguments to find a CancionesFavoritas
     * @example
     * // Get one CancionesFavoritas
     * const cancionesFavoritas = await prisma.cancionesFavoritas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cancionesFavoritasFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cancionesFavoritasFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cancionesFavoritas'> extends True ? Prisma__cancionesFavoritasClient<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__cancionesFavoritasClient<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one CancionesFavoritas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cancionesFavoritasFindUniqueOrThrowArgs} args - Arguments to find a CancionesFavoritas
     * @example
     * // Get one CancionesFavoritas
     * const cancionesFavoritas = await prisma.cancionesFavoritas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cancionesFavoritasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cancionesFavoritasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cancionesFavoritasClient<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first CancionesFavoritas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionesFavoritasFindFirstArgs} args - Arguments to find a CancionesFavoritas
     * @example
     * // Get one CancionesFavoritas
     * const cancionesFavoritas = await prisma.cancionesFavoritas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cancionesFavoritasFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cancionesFavoritasFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cancionesFavoritas'> extends True ? Prisma__cancionesFavoritasClient<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__cancionesFavoritasClient<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first CancionesFavoritas that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionesFavoritasFindFirstOrThrowArgs} args - Arguments to find a CancionesFavoritas
     * @example
     * // Get one CancionesFavoritas
     * const cancionesFavoritas = await prisma.cancionesFavoritas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cancionesFavoritasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cancionesFavoritasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cancionesFavoritasClient<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more CancionesFavoritas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionesFavoritasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CancionesFavoritas
     * const cancionesFavoritas = await prisma.cancionesFavoritas.findMany()
     * 
     * // Get first 10 CancionesFavoritas
     * const cancionesFavoritas = await prisma.cancionesFavoritas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cancionesFavoritasWithIdOnly = await prisma.cancionesFavoritas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cancionesFavoritasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cancionesFavoritasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a CancionesFavoritas.
     * @param {cancionesFavoritasCreateArgs} args - Arguments to create a CancionesFavoritas.
     * @example
     * // Create one CancionesFavoritas
     * const CancionesFavoritas = await prisma.cancionesFavoritas.create({
     *   data: {
     *     // ... data to create a CancionesFavoritas
     *   }
     * })
     * 
    **/
    create<T extends cancionesFavoritasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cancionesFavoritasCreateArgs<ExtArgs>>
    ): Prisma__cancionesFavoritasClient<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many CancionesFavoritas.
     *     @param {cancionesFavoritasCreateManyArgs} args - Arguments to create many CancionesFavoritas.
     *     @example
     *     // Create many CancionesFavoritas
     *     const cancionesFavoritas = await prisma.cancionesFavoritas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cancionesFavoritasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cancionesFavoritasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CancionesFavoritas.
     * @param {cancionesFavoritasDeleteArgs} args - Arguments to delete one CancionesFavoritas.
     * @example
     * // Delete one CancionesFavoritas
     * const CancionesFavoritas = await prisma.cancionesFavoritas.delete({
     *   where: {
     *     // ... filter to delete one CancionesFavoritas
     *   }
     * })
     * 
    **/
    delete<T extends cancionesFavoritasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cancionesFavoritasDeleteArgs<ExtArgs>>
    ): Prisma__cancionesFavoritasClient<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one CancionesFavoritas.
     * @param {cancionesFavoritasUpdateArgs} args - Arguments to update one CancionesFavoritas.
     * @example
     * // Update one CancionesFavoritas
     * const cancionesFavoritas = await prisma.cancionesFavoritas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cancionesFavoritasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cancionesFavoritasUpdateArgs<ExtArgs>>
    ): Prisma__cancionesFavoritasClient<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more CancionesFavoritas.
     * @param {cancionesFavoritasDeleteManyArgs} args - Arguments to filter CancionesFavoritas to delete.
     * @example
     * // Delete a few CancionesFavoritas
     * const { count } = await prisma.cancionesFavoritas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cancionesFavoritasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cancionesFavoritasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CancionesFavoritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionesFavoritasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CancionesFavoritas
     * const cancionesFavoritas = await prisma.cancionesFavoritas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cancionesFavoritasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cancionesFavoritasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CancionesFavoritas.
     * @param {cancionesFavoritasUpsertArgs} args - Arguments to update or create a CancionesFavoritas.
     * @example
     * // Update or create a CancionesFavoritas
     * const cancionesFavoritas = await prisma.cancionesFavoritas.upsert({
     *   create: {
     *     // ... data to create a CancionesFavoritas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CancionesFavoritas we want to update
     *   }
     * })
    **/
    upsert<T extends cancionesFavoritasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cancionesFavoritasUpsertArgs<ExtArgs>>
    ): Prisma__cancionesFavoritasClient<$Types.GetResult<cancionesFavoritasPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of CancionesFavoritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cancionesFavoritasCountArgs} args - Arguments to filter CancionesFavoritas to count.
     * @example
     * // Count the number of CancionesFavoritas
     * const count = await prisma.cancionesFavoritas.count({
     *   where: {
     *     // ... the filter for the CancionesFavoritas we want to count
     *   }
     * })
    **/
    count<T extends cancionesFavoritasCountArgs>(
      args?: Subset<T, cancionesFavoritasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CancionesFavoritasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CancionesFavoritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionesFavoritasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CancionesFavoritasAggregateArgs>(args: Subset<T, CancionesFavoritasAggregateArgs>): Prisma.PrismaPromise<GetCancionesFavoritasAggregateType<T>>

    /**
     * Group by CancionesFavoritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionesFavoritasGroupByArgs} args - Group by arguments.
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
      T extends CancionesFavoritasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CancionesFavoritasGroupByArgs['orderBy'] }
        : { orderBy?: CancionesFavoritasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CancionesFavoritasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCancionesFavoritasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for cancionesFavoritas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cancionesFavoritasClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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

    usuario<T extends usuarioArgs<ExtArgs> = {}>(args?: Subset<T, usuarioArgs<ExtArgs>>): Prisma__usuarioClient<$Types.GetResult<usuarioPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    cancion<T extends cancionArgs<ExtArgs> = {}>(args?: Subset<T, cancionArgs<ExtArgs>>): Prisma__cancionClient<$Types.GetResult<cancionPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

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
   * cancionesFavoritas base type for findUnique actions
   */
  export type cancionesFavoritasFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    /**
     * Filter, which cancionesFavoritas to fetch.
     */
    where: cancionesFavoritasWhereUniqueInput
  }

  /**
   * cancionesFavoritas findUnique
   */
  export interface cancionesFavoritasFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cancionesFavoritasFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cancionesFavoritas findUniqueOrThrow
   */
  export type cancionesFavoritasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    /**
     * Filter, which cancionesFavoritas to fetch.
     */
    where: cancionesFavoritasWhereUniqueInput
  }


  /**
   * cancionesFavoritas base type for findFirst actions
   */
  export type cancionesFavoritasFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    /**
     * Filter, which cancionesFavoritas to fetch.
     */
    where?: cancionesFavoritasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancionesFavoritas to fetch.
     */
    orderBy?: Enumerable<cancionesFavoritasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cancionesFavoritas.
     */
    cursor?: cancionesFavoritasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancionesFavoritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancionesFavoritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cancionesFavoritas.
     */
    distinct?: Enumerable<CancionesFavoritasScalarFieldEnum>
  }

  /**
   * cancionesFavoritas findFirst
   */
  export interface cancionesFavoritasFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cancionesFavoritasFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cancionesFavoritas findFirstOrThrow
   */
  export type cancionesFavoritasFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    /**
     * Filter, which cancionesFavoritas to fetch.
     */
    where?: cancionesFavoritasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancionesFavoritas to fetch.
     */
    orderBy?: Enumerable<cancionesFavoritasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cancionesFavoritas.
     */
    cursor?: cancionesFavoritasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancionesFavoritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancionesFavoritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cancionesFavoritas.
     */
    distinct?: Enumerable<CancionesFavoritasScalarFieldEnum>
  }


  /**
   * cancionesFavoritas findMany
   */
  export type cancionesFavoritasFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    /**
     * Filter, which cancionesFavoritas to fetch.
     */
    where?: cancionesFavoritasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cancionesFavoritas to fetch.
     */
    orderBy?: Enumerable<cancionesFavoritasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cancionesFavoritas.
     */
    cursor?: cancionesFavoritasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cancionesFavoritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cancionesFavoritas.
     */
    skip?: number
    distinct?: Enumerable<CancionesFavoritasScalarFieldEnum>
  }


  /**
   * cancionesFavoritas create
   */
  export type cancionesFavoritasCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    /**
     * The data needed to create a cancionesFavoritas.
     */
    data: XOR<cancionesFavoritasCreateInput, cancionesFavoritasUncheckedCreateInput>
  }


  /**
   * cancionesFavoritas createMany
   */
  export type cancionesFavoritasCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cancionesFavoritas.
     */
    data: Enumerable<cancionesFavoritasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * cancionesFavoritas update
   */
  export type cancionesFavoritasUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    /**
     * The data needed to update a cancionesFavoritas.
     */
    data: XOR<cancionesFavoritasUpdateInput, cancionesFavoritasUncheckedUpdateInput>
    /**
     * Choose, which cancionesFavoritas to update.
     */
    where: cancionesFavoritasWhereUniqueInput
  }


  /**
   * cancionesFavoritas updateMany
   */
  export type cancionesFavoritasUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cancionesFavoritas.
     */
    data: XOR<cancionesFavoritasUpdateManyMutationInput, cancionesFavoritasUncheckedUpdateManyInput>
    /**
     * Filter which cancionesFavoritas to update
     */
    where?: cancionesFavoritasWhereInput
  }


  /**
   * cancionesFavoritas upsert
   */
  export type cancionesFavoritasUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    /**
     * The filter to search for the cancionesFavoritas to update in case it exists.
     */
    where: cancionesFavoritasWhereUniqueInput
    /**
     * In case the cancionesFavoritas found by the `where` argument doesn't exist, create a new cancionesFavoritas with this data.
     */
    create: XOR<cancionesFavoritasCreateInput, cancionesFavoritasUncheckedCreateInput>
    /**
     * In case the cancionesFavoritas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cancionesFavoritasUpdateInput, cancionesFavoritasUncheckedUpdateInput>
  }


  /**
   * cancionesFavoritas delete
   */
  export type cancionesFavoritasDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
    /**
     * Filter which cancionesFavoritas to delete.
     */
    where: cancionesFavoritasWhereUniqueInput
  }


  /**
   * cancionesFavoritas deleteMany
   */
  export type cancionesFavoritasDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cancionesFavoritas to delete
     */
    where?: cancionesFavoritasWhereInput
  }


  /**
   * cancionesFavoritas without action
   */
  export type cancionesFavoritasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cancionesFavoritas
     */
    select?: cancionesFavoritasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cancionesFavoritasInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CancionScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    artista: 'artista',
    duracion: 'duracion'
  };

  export type CancionScalarFieldEnum = (typeof CancionScalarFieldEnum)[keyof typeof CancionScalarFieldEnum]


  export const CancionesFavoritasScalarFieldEnum: {
    id: 'id',
    idUsuario: 'idUsuario',
    idCancion: 'idCancion',
    fechaRegistro: 'fechaRegistro'
  };

  export type CancionesFavoritasScalarFieldEnum = (typeof CancionesFavoritasScalarFieldEnum)[keyof typeof CancionesFavoritasScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type usuarioWhereInput = {
    AND?: Enumerable<usuarioWhereInput>
    OR?: Enumerable<usuarioWhereInput>
    NOT?: Enumerable<usuarioWhereInput>
    id?: IntFilter | number
    nombre?: StringFilter | string
    apellido?: StringFilter | string
    email?: StringFilter | string
    favoritas?: CancionesFavoritasListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    favoritas?: cancionesFavoritasOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usuarioScalarWhereWithAggregatesInput>
    OR?: Enumerable<usuarioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usuarioScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nombre?: StringWithAggregatesFilter | string
    apellido?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
  }

  export type cancionWhereInput = {
    AND?: Enumerable<cancionWhereInput>
    OR?: Enumerable<cancionWhereInput>
    NOT?: Enumerable<cancionWhereInput>
    id?: IntFilter | number
    titulo?: StringFilter | string
    artista?: StringFilter | string
    duracion?: StringFilter | string
    favoritas?: CancionesFavoritasListRelationFilter
  }

  export type cancionOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    artista?: SortOrder
    duracion?: SortOrder
    favoritas?: cancionesFavoritasOrderByRelationAggregateInput
  }

  export type cancionWhereUniqueInput = {
    id?: number
  }

  export type cancionOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    artista?: SortOrder
    duracion?: SortOrder
    _count?: cancionCountOrderByAggregateInput
    _avg?: cancionAvgOrderByAggregateInput
    _max?: cancionMaxOrderByAggregateInput
    _min?: cancionMinOrderByAggregateInput
    _sum?: cancionSumOrderByAggregateInput
  }

  export type cancionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<cancionScalarWhereWithAggregatesInput>
    OR?: Enumerable<cancionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<cancionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    titulo?: StringWithAggregatesFilter | string
    artista?: StringWithAggregatesFilter | string
    duracion?: StringWithAggregatesFilter | string
  }

  export type cancionesFavoritasWhereInput = {
    AND?: Enumerable<cancionesFavoritasWhereInput>
    OR?: Enumerable<cancionesFavoritasWhereInput>
    NOT?: Enumerable<cancionesFavoritasWhereInput>
    id?: IntFilter | number
    idUsuario?: IntFilter | number
    idCancion?: IntFilter | number
    fechaRegistro?: DateTimeFilter | Date | string
    usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
    cancion?: XOR<CancionRelationFilter, cancionWhereInput>
  }

  export type cancionesFavoritasOrderByWithRelationInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idCancion?: SortOrder
    fechaRegistro?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    cancion?: cancionOrderByWithRelationInput
  }

  export type cancionesFavoritasWhereUniqueInput = {
    id?: number
  }

  export type cancionesFavoritasOrderByWithAggregationInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idCancion?: SortOrder
    fechaRegistro?: SortOrder
    _count?: cancionesFavoritasCountOrderByAggregateInput
    _avg?: cancionesFavoritasAvgOrderByAggregateInput
    _max?: cancionesFavoritasMaxOrderByAggregateInput
    _min?: cancionesFavoritasMinOrderByAggregateInput
    _sum?: cancionesFavoritasSumOrderByAggregateInput
  }

  export type cancionesFavoritasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<cancionesFavoritasScalarWhereWithAggregatesInput>
    OR?: Enumerable<cancionesFavoritasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<cancionesFavoritasScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idUsuario?: IntWithAggregatesFilter | number
    idCancion?: IntWithAggregatesFilter | number
    fechaRegistro?: DateTimeWithAggregatesFilter | Date | string
  }

  export type usuarioCreateInput = {
    nombre: string
    apellido: string
    email: string
    favoritas?: cancionesFavoritasCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    favoritas?: cancionesFavoritasUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favoritas?: cancionesFavoritasUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favoritas?: cancionesFavoritasUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
  }

  export type usuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type cancionCreateInput = {
    titulo: string
    artista: string
    duracion: string
    favoritas?: cancionesFavoritasCreateNestedManyWithoutCancionInput
  }

  export type cancionUncheckedCreateInput = {
    id?: number
    titulo: string
    artista: string
    duracion: string
    favoritas?: cancionesFavoritasUncheckedCreateNestedManyWithoutCancionInput
  }

  export type cancionUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    duracion?: StringFieldUpdateOperationsInput | string
    favoritas?: cancionesFavoritasUpdateManyWithoutCancionNestedInput
  }

  export type cancionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    duracion?: StringFieldUpdateOperationsInput | string
    favoritas?: cancionesFavoritasUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type cancionCreateManyInput = {
    id?: number
    titulo: string
    artista: string
    duracion: string
  }

  export type cancionUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    duracion?: StringFieldUpdateOperationsInput | string
  }

  export type cancionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    duracion?: StringFieldUpdateOperationsInput | string
  }

  export type cancionesFavoritasCreateInput = {
    fechaRegistro?: Date | string
    usuario: usuarioCreateNestedOneWithoutFavoritasInput
    cancion: cancionCreateNestedOneWithoutFavoritasInput
  }

  export type cancionesFavoritasUncheckedCreateInput = {
    id?: number
    idUsuario: number
    idCancion: number
    fechaRegistro?: Date | string
  }

  export type cancionesFavoritasUpdateInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutFavoritasNestedInput
    cancion?: cancionUpdateOneRequiredWithoutFavoritasNestedInput
  }

  export type cancionesFavoritasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idCancion?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cancionesFavoritasCreateManyInput = {
    id?: number
    idUsuario: number
    idCancion: number
    fechaRegistro?: Date | string
  }

  export type cancionesFavoritasUpdateManyMutationInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cancionesFavoritasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idCancion?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type CancionesFavoritasListRelationFilter = {
    every?: cancionesFavoritasWhereInput
    some?: cancionesFavoritasWhereInput
    none?: cancionesFavoritasWhereInput
  }

  export type cancionesFavoritasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
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

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type cancionCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    artista?: SortOrder
    duracion?: SortOrder
  }

  export type cancionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cancionMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    artista?: SortOrder
    duracion?: SortOrder
  }

  export type cancionMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    artista?: SortOrder
    duracion?: SortOrder
  }

  export type cancionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UsuarioRelationFilter = {
    is?: usuarioWhereInput | null
    isNot?: usuarioWhereInput | null
  }

  export type CancionRelationFilter = {
    is?: cancionWhereInput | null
    isNot?: cancionWhereInput | null
  }

  export type cancionesFavoritasCountOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idCancion?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type cancionesFavoritasAvgOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idCancion?: SortOrder
  }

  export type cancionesFavoritasMaxOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idCancion?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type cancionesFavoritasMinOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idCancion?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type cancionesFavoritasSumOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    idCancion?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type cancionesFavoritasCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<cancionesFavoritasCreateWithoutUsuarioInput>, Enumerable<cancionesFavoritasUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<cancionesFavoritasCreateOrConnectWithoutUsuarioInput>
    createMany?: cancionesFavoritasCreateManyUsuarioInputEnvelope
    connect?: Enumerable<cancionesFavoritasWhereUniqueInput>
  }

  export type cancionesFavoritasUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<cancionesFavoritasCreateWithoutUsuarioInput>, Enumerable<cancionesFavoritasUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<cancionesFavoritasCreateOrConnectWithoutUsuarioInput>
    createMany?: cancionesFavoritasCreateManyUsuarioInputEnvelope
    connect?: Enumerable<cancionesFavoritasWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type cancionesFavoritasUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<Enumerable<cancionesFavoritasCreateWithoutUsuarioInput>, Enumerable<cancionesFavoritasUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<cancionesFavoritasCreateOrConnectWithoutUsuarioInput>
    upsert?: Enumerable<cancionesFavoritasUpsertWithWhereUniqueWithoutUsuarioInput>
    createMany?: cancionesFavoritasCreateManyUsuarioInputEnvelope
    set?: Enumerable<cancionesFavoritasWhereUniqueInput>
    disconnect?: Enumerable<cancionesFavoritasWhereUniqueInput>
    delete?: Enumerable<cancionesFavoritasWhereUniqueInput>
    connect?: Enumerable<cancionesFavoritasWhereUniqueInput>
    update?: Enumerable<cancionesFavoritasUpdateWithWhereUniqueWithoutUsuarioInput>
    updateMany?: Enumerable<cancionesFavoritasUpdateManyWithWhereWithoutUsuarioInput>
    deleteMany?: Enumerable<cancionesFavoritasScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cancionesFavoritasUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<Enumerable<cancionesFavoritasCreateWithoutUsuarioInput>, Enumerable<cancionesFavoritasUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<cancionesFavoritasCreateOrConnectWithoutUsuarioInput>
    upsert?: Enumerable<cancionesFavoritasUpsertWithWhereUniqueWithoutUsuarioInput>
    createMany?: cancionesFavoritasCreateManyUsuarioInputEnvelope
    set?: Enumerable<cancionesFavoritasWhereUniqueInput>
    disconnect?: Enumerable<cancionesFavoritasWhereUniqueInput>
    delete?: Enumerable<cancionesFavoritasWhereUniqueInput>
    connect?: Enumerable<cancionesFavoritasWhereUniqueInput>
    update?: Enumerable<cancionesFavoritasUpdateWithWhereUniqueWithoutUsuarioInput>
    updateMany?: Enumerable<cancionesFavoritasUpdateManyWithWhereWithoutUsuarioInput>
    deleteMany?: Enumerable<cancionesFavoritasScalarWhereInput>
  }

  export type cancionesFavoritasCreateNestedManyWithoutCancionInput = {
    create?: XOR<Enumerable<cancionesFavoritasCreateWithoutCancionInput>, Enumerable<cancionesFavoritasUncheckedCreateWithoutCancionInput>>
    connectOrCreate?: Enumerable<cancionesFavoritasCreateOrConnectWithoutCancionInput>
    createMany?: cancionesFavoritasCreateManyCancionInputEnvelope
    connect?: Enumerable<cancionesFavoritasWhereUniqueInput>
  }

  export type cancionesFavoritasUncheckedCreateNestedManyWithoutCancionInput = {
    create?: XOR<Enumerable<cancionesFavoritasCreateWithoutCancionInput>, Enumerable<cancionesFavoritasUncheckedCreateWithoutCancionInput>>
    connectOrCreate?: Enumerable<cancionesFavoritasCreateOrConnectWithoutCancionInput>
    createMany?: cancionesFavoritasCreateManyCancionInputEnvelope
    connect?: Enumerable<cancionesFavoritasWhereUniqueInput>
  }

  export type cancionesFavoritasUpdateManyWithoutCancionNestedInput = {
    create?: XOR<Enumerable<cancionesFavoritasCreateWithoutCancionInput>, Enumerable<cancionesFavoritasUncheckedCreateWithoutCancionInput>>
    connectOrCreate?: Enumerable<cancionesFavoritasCreateOrConnectWithoutCancionInput>
    upsert?: Enumerable<cancionesFavoritasUpsertWithWhereUniqueWithoutCancionInput>
    createMany?: cancionesFavoritasCreateManyCancionInputEnvelope
    set?: Enumerable<cancionesFavoritasWhereUniqueInput>
    disconnect?: Enumerable<cancionesFavoritasWhereUniqueInput>
    delete?: Enumerable<cancionesFavoritasWhereUniqueInput>
    connect?: Enumerable<cancionesFavoritasWhereUniqueInput>
    update?: Enumerable<cancionesFavoritasUpdateWithWhereUniqueWithoutCancionInput>
    updateMany?: Enumerable<cancionesFavoritasUpdateManyWithWhereWithoutCancionInput>
    deleteMany?: Enumerable<cancionesFavoritasScalarWhereInput>
  }

  export type cancionesFavoritasUncheckedUpdateManyWithoutCancionNestedInput = {
    create?: XOR<Enumerable<cancionesFavoritasCreateWithoutCancionInput>, Enumerable<cancionesFavoritasUncheckedCreateWithoutCancionInput>>
    connectOrCreate?: Enumerable<cancionesFavoritasCreateOrConnectWithoutCancionInput>
    upsert?: Enumerable<cancionesFavoritasUpsertWithWhereUniqueWithoutCancionInput>
    createMany?: cancionesFavoritasCreateManyCancionInputEnvelope
    set?: Enumerable<cancionesFavoritasWhereUniqueInput>
    disconnect?: Enumerable<cancionesFavoritasWhereUniqueInput>
    delete?: Enumerable<cancionesFavoritasWhereUniqueInput>
    connect?: Enumerable<cancionesFavoritasWhereUniqueInput>
    update?: Enumerable<cancionesFavoritasUpdateWithWhereUniqueWithoutCancionInput>
    updateMany?: Enumerable<cancionesFavoritasUpdateManyWithWhereWithoutCancionInput>
    deleteMany?: Enumerable<cancionesFavoritasScalarWhereInput>
  }

  export type usuarioCreateNestedOneWithoutFavoritasInput = {
    create?: XOR<usuarioCreateWithoutFavoritasInput, usuarioUncheckedCreateWithoutFavoritasInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutFavoritasInput
    connect?: usuarioWhereUniqueInput
  }

  export type cancionCreateNestedOneWithoutFavoritasInput = {
    create?: XOR<cancionCreateWithoutFavoritasInput, cancionUncheckedCreateWithoutFavoritasInput>
    connectOrCreate?: cancionCreateOrConnectWithoutFavoritasInput
    connect?: cancionWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuarioUpdateOneRequiredWithoutFavoritasNestedInput = {
    create?: XOR<usuarioCreateWithoutFavoritasInput, usuarioUncheckedCreateWithoutFavoritasInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutFavoritasInput
    upsert?: usuarioUpsertWithoutFavoritasInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<usuarioUpdateWithoutFavoritasInput, usuarioUncheckedUpdateWithoutFavoritasInput>
  }

  export type cancionUpdateOneRequiredWithoutFavoritasNestedInput = {
    create?: XOR<cancionCreateWithoutFavoritasInput, cancionUncheckedCreateWithoutFavoritasInput>
    connectOrCreate?: cancionCreateOrConnectWithoutFavoritasInput
    upsert?: cancionUpsertWithoutFavoritasInput
    connect?: cancionWhereUniqueInput
    update?: XOR<cancionUpdateWithoutFavoritasInput, cancionUncheckedUpdateWithoutFavoritasInput>
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

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
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

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type cancionesFavoritasCreateWithoutUsuarioInput = {
    fechaRegistro?: Date | string
    cancion: cancionCreateNestedOneWithoutFavoritasInput
  }

  export type cancionesFavoritasUncheckedCreateWithoutUsuarioInput = {
    id?: number
    idCancion: number
    fechaRegistro?: Date | string
  }

  export type cancionesFavoritasCreateOrConnectWithoutUsuarioInput = {
    where: cancionesFavoritasWhereUniqueInput
    create: XOR<cancionesFavoritasCreateWithoutUsuarioInput, cancionesFavoritasUncheckedCreateWithoutUsuarioInput>
  }

  export type cancionesFavoritasCreateManyUsuarioInputEnvelope = {
    data: Enumerable<cancionesFavoritasCreateManyUsuarioInput>
    skipDuplicates?: boolean
  }

  export type cancionesFavoritasUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: cancionesFavoritasWhereUniqueInput
    update: XOR<cancionesFavoritasUpdateWithoutUsuarioInput, cancionesFavoritasUncheckedUpdateWithoutUsuarioInput>
    create: XOR<cancionesFavoritasCreateWithoutUsuarioInput, cancionesFavoritasUncheckedCreateWithoutUsuarioInput>
  }

  export type cancionesFavoritasUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: cancionesFavoritasWhereUniqueInput
    data: XOR<cancionesFavoritasUpdateWithoutUsuarioInput, cancionesFavoritasUncheckedUpdateWithoutUsuarioInput>
  }

  export type cancionesFavoritasUpdateManyWithWhereWithoutUsuarioInput = {
    where: cancionesFavoritasScalarWhereInput
    data: XOR<cancionesFavoritasUpdateManyMutationInput, cancionesFavoritasUncheckedUpdateManyWithoutFavoritasInput>
  }

  export type cancionesFavoritasScalarWhereInput = {
    AND?: Enumerable<cancionesFavoritasScalarWhereInput>
    OR?: Enumerable<cancionesFavoritasScalarWhereInput>
    NOT?: Enumerable<cancionesFavoritasScalarWhereInput>
    id?: IntFilter | number
    idUsuario?: IntFilter | number
    idCancion?: IntFilter | number
    fechaRegistro?: DateTimeFilter | Date | string
  }

  export type cancionesFavoritasCreateWithoutCancionInput = {
    fechaRegistro?: Date | string
    usuario: usuarioCreateNestedOneWithoutFavoritasInput
  }

  export type cancionesFavoritasUncheckedCreateWithoutCancionInput = {
    id?: number
    idUsuario: number
    fechaRegistro?: Date | string
  }

  export type cancionesFavoritasCreateOrConnectWithoutCancionInput = {
    where: cancionesFavoritasWhereUniqueInput
    create: XOR<cancionesFavoritasCreateWithoutCancionInput, cancionesFavoritasUncheckedCreateWithoutCancionInput>
  }

  export type cancionesFavoritasCreateManyCancionInputEnvelope = {
    data: Enumerable<cancionesFavoritasCreateManyCancionInput>
    skipDuplicates?: boolean
  }

  export type cancionesFavoritasUpsertWithWhereUniqueWithoutCancionInput = {
    where: cancionesFavoritasWhereUniqueInput
    update: XOR<cancionesFavoritasUpdateWithoutCancionInput, cancionesFavoritasUncheckedUpdateWithoutCancionInput>
    create: XOR<cancionesFavoritasCreateWithoutCancionInput, cancionesFavoritasUncheckedCreateWithoutCancionInput>
  }

  export type cancionesFavoritasUpdateWithWhereUniqueWithoutCancionInput = {
    where: cancionesFavoritasWhereUniqueInput
    data: XOR<cancionesFavoritasUpdateWithoutCancionInput, cancionesFavoritasUncheckedUpdateWithoutCancionInput>
  }

  export type cancionesFavoritasUpdateManyWithWhereWithoutCancionInput = {
    where: cancionesFavoritasScalarWhereInput
    data: XOR<cancionesFavoritasUpdateManyMutationInput, cancionesFavoritasUncheckedUpdateManyWithoutFavoritasInput>
  }

  export type usuarioCreateWithoutFavoritasInput = {
    nombre: string
    apellido: string
    email: string
  }

  export type usuarioUncheckedCreateWithoutFavoritasInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
  }

  export type usuarioCreateOrConnectWithoutFavoritasInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutFavoritasInput, usuarioUncheckedCreateWithoutFavoritasInput>
  }

  export type cancionCreateWithoutFavoritasInput = {
    titulo: string
    artista: string
    duracion: string
  }

  export type cancionUncheckedCreateWithoutFavoritasInput = {
    id?: number
    titulo: string
    artista: string
    duracion: string
  }

  export type cancionCreateOrConnectWithoutFavoritasInput = {
    where: cancionWhereUniqueInput
    create: XOR<cancionCreateWithoutFavoritasInput, cancionUncheckedCreateWithoutFavoritasInput>
  }

  export type usuarioUpsertWithoutFavoritasInput = {
    update: XOR<usuarioUpdateWithoutFavoritasInput, usuarioUncheckedUpdateWithoutFavoritasInput>
    create: XOR<usuarioCreateWithoutFavoritasInput, usuarioUncheckedCreateWithoutFavoritasInput>
  }

  export type usuarioUpdateWithoutFavoritasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateWithoutFavoritasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type cancionUpsertWithoutFavoritasInput = {
    update: XOR<cancionUpdateWithoutFavoritasInput, cancionUncheckedUpdateWithoutFavoritasInput>
    create: XOR<cancionCreateWithoutFavoritasInput, cancionUncheckedCreateWithoutFavoritasInput>
  }

  export type cancionUpdateWithoutFavoritasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    duracion?: StringFieldUpdateOperationsInput | string
  }

  export type cancionUncheckedUpdateWithoutFavoritasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    artista?: StringFieldUpdateOperationsInput | string
    duracion?: StringFieldUpdateOperationsInput | string
  }

  export type cancionesFavoritasCreateManyUsuarioInput = {
    id?: number
    idCancion: number
    fechaRegistro?: Date | string
  }

  export type cancionesFavoritasUpdateWithoutUsuarioInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    cancion?: cancionUpdateOneRequiredWithoutFavoritasNestedInput
  }

  export type cancionesFavoritasUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCancion?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cancionesFavoritasUncheckedUpdateManyWithoutFavoritasInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCancion?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cancionesFavoritasCreateManyCancionInput = {
    id?: number
    idUsuario: number
    fechaRegistro?: Date | string
  }

  export type cancionesFavoritasUpdateWithoutCancionInput = {
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutFavoritasNestedInput
  }

  export type cancionesFavoritasUncheckedUpdateWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
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