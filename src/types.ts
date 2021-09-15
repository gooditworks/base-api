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


/** Результат запроса greeting на разных языках */
export type GreetingResult = {
  __typename?: 'GreetingResult';
  /** Greeting строка на русском языке */
  ru: Scalars['String'];
  /** Greeting строка на английском языке */
  en: Scalars['String'];
};

/** Результат запроса health */
export type Health = {
  __typename?: 'Health';
  /** Возвращает простую строку ("void") для проверки того, что сам сервис работает */
  empty: Maybe<Scalars['String']>;
  /** Медленный запрос, задерживает ответ на duration миллисекунд, а в percent случаях не ответит никогда */
  slow: Maybe<Scalars['String']>;
  /** Запрос, имитирующий реальную работу (в первую очередь с базой данных) */
  realistic: Maybe<Scalars['String']>;
  /** Всегда завершается ошибкой, существует для проверки интеграции Sentry */
  fail: Maybe<Scalars['String']>;
};


/** Результат запроса health */
export type HealthSlowArgs = {
  duration: Scalars['Int'];
  percent: Scalars['Int'];
};


/** Результат запроса health */
export type HealthFailArgs = {
  message: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Вызывает `console.log("noop")` и возвращает магическое число */
  noop: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** Системные запросы для проверки состояния сервиса и тестирования производительности */
  health: Maybe<Health>;
  /**
   * Hello world запрос.
   * Возращает greeting строки на разных языках
   */
  greeting: Maybe<GreetingResult>;
};


export type QueryGreetingArgs = {
  name: Scalars['String'];
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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  GreetingResult: ResolverTypeWrapper<GreetingResult>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Health: ResolverTypeWrapper<Health>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  GreetingResult: GreetingResult;
  String: Scalars['String'];
  Health: Health;
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  Boolean: Scalars['Boolean'];
}>;

export type SuperuserDirectiveArgs = {  };

export type SuperuserDirectiveResolver<Result, Parent, ContextType = Context, Args = SuperuserDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GreetingResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GreetingResult'] = ResolversParentTypes['GreetingResult']> = ResolversObject<{
  ru: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  en: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HealthResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Health'] = ResolversParentTypes['Health']> = ResolversObject<{
  empty: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slow: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<HealthSlowArgs, 'duration' | 'percent'>>;
  realistic: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fail: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<HealthFailArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  noop: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  health: Resolver<Maybe<ResolversTypes['Health']>, ParentType, ContextType>;
  greeting: Resolver<Maybe<ResolversTypes['GreetingResult']>, ParentType, ContextType, RequireFields<QueryGreetingArgs, 'name'>>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  GreetingResult: GreetingResultResolvers<ContextType>;
  Health: HealthResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = Context> = ResolversObject<{
  superuser: SuperuserDirectiveResolver<any, any, ContextType>;
}>;
