/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/interaction` | `/interaction`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/medicine` | `/medicine`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/photo` | `/photo`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/interaction` | `/interaction`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/medicine` | `/medicine`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/photo` | `/photo`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/interaction${`?${string}` | `#${string}` | ''}` | `/interaction${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/medicine${`?${string}` | `#${string}` | ''}` | `/medicine${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/photo${`?${string}` | `#${string}` | ''}` | `/photo${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/interaction` | `/interaction`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/medicine` | `/medicine`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/photo` | `/photo`; params?: Router.UnknownInputParams; };
    }
  }
}
