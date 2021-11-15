/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
import { GraphQLResolveInfo } from 'graphql';
import { Context } from './src/context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type ResolverHandler<T> = Extract<T, Function>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Тип Cache-Control */
export type CacheControlScope =
  | 'PRIVATE'
  | 'PUBLIC';

/** Результат запроса health */
export type Health = {
  __typename?: 'Health';
  /** Возвращает простую строку ("void") для проверки того, что сам сервис работает */
  empty: Maybe<Scalars['String']>;
  /** Всегда завершается ошибкой, существует для проверки интеграции Sentry */
  fail: Maybe<Scalars['String']>;
  /** Запрос, имитирующий реальную работу (в первую очередь с базой данных) */
  realistic: Maybe<Scalars['String']>;
  /** Медленный запрос, задерживает ответ на duration миллисекунд, а в percent случаях не ответит никогда */
  slow: Maybe<Scalars['String']>;
};


/** Результат запроса health */
export type HealthFailArgs = {
  message: Maybe<Scalars['String']>;
};


/** Результат запроса health */
export type HealthSlowArgs = {
  duration: Scalars['Int'];
  percent: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Создание пони */
  createPony: Maybe<Pony>;
};


export type MutationCreatePonyArgs = {
  name: Scalars['String'];
  race: PonyRace;
};

/** Пони */
export type Pony = {
  __typename?: 'Pony';
  /** Уникальный идентификатор (ID) пони */
  id: Scalars['Int'];
  /** Имя пони */
  name: Scalars['String'];
  /** Раса пони */
  race: PonyRace;
};

export type PonyRace =
  /** Аликорн */
  | 'Alicorn'
  /** Земная пони */
  | 'Earth'
  /** Пегас */
  | 'Pegasus'
  /** Единорог */
  | 'Unicorn';

export type Query = {
  __typename?: 'Query';
  /** Системные запросы для проверки состояния сервиса и тестирования производительности */
  health: Maybe<Health>;
  /** Получение всех поней */
  ponies: Maybe<Array<Maybe<Pony>>>;
  /** Получение пони по ID */
  pony: Maybe<Pony>;
};


export type QueryPonyArgs = {
  id: Scalars['Int'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CacheControlScope: CacheControlScope;
  Health: ResolverTypeWrapper<Health>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Pony: ResolverTypeWrapper<Pony>;
  PonyRace: PonyRace;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Health: Health;
  Int: Scalars['Int'];
  Mutation: {};
  Pony: Pony;
  Query: {};
  String: Scalars['String'];
}>;

export type CacheControlDirectiveArgs = {
  inheritMaxAge: Maybe<Scalars['Boolean']>;
  maxAge: Maybe<Scalars['Int']>;
  scope: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = Context, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SuperuserDirectiveArgs = { };

export type SuperuserDirectiveResolver<Result, Parent, ContextType = Context, Args = SuperuserDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type HealthResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Health'] = ResolversParentTypes['Health']> = ResolversObject<{
  empty: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fail: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<HealthFailArgs, never>>;
  realistic: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slow: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<HealthSlowArgs, 'duration' | 'percent'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createPony: Resolver<Maybe<ResolversTypes['Pony']>, ParentType, ContextType, RequireFields<MutationCreatePonyArgs, 'name' | 'race'>>;
}>;

export type PonyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Pony'] = ResolversParentTypes['Pony']> = ResolversObject<{
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  race: Resolver<ResolversTypes['PonyRace'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  health: Resolver<Maybe<ResolversTypes['Health']>, ParentType, ContextType>;
  ponies: Resolver<Maybe<Array<Maybe<ResolversTypes['Pony']>>>, ParentType, ContextType>;
  pony: Resolver<Maybe<ResolversTypes['Pony']>, ParentType, ContextType, RequireFields<QueryPonyArgs, 'id'>>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Health: HealthResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Pony: PonyResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = Context> = ResolversObject<{
  cacheControl: CacheControlDirectiveResolver<any, any, ContextType>;
  superuser: SuperuserDirectiveResolver<any, any, ContextType>;
}>;
