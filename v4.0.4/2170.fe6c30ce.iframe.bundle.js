/*! For license information please see 2170.fe6c30ce.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[2170],{"../../node_modules/@looker/extension-sdk-react/lib/esm/components/ExtensionProvider/ExtensionProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>ExtensionContext});var ExtensionContext=__webpack_require__("../../node_modules/react/index.js").createContext(void 0)},"../../node_modules/@visx/shape/esm/shapes/LineRadial.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>LineRadial});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_util_D3ShapeFactories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@visx/shape/esm/util/D3ShapeFactories.js"),_excluded=["className","angle","radius","defined","curve","data","innerRef","children","fill"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function LineRadial(_ref){var className=_ref.className,angle=_ref.angle,radius=_ref.radius,defined=_ref.defined,curve=_ref.curve,_ref$data=_ref.data,data=void 0===_ref$data?[]:_ref$data,innerRef=_ref.innerRef,children=_ref.children,_ref$fill=_ref.fill,fill=void 0===_ref$fill?"transparent":_ref$fill,restProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),path=(0,_util_D3ShapeFactories__WEBPACK_IMPORTED_MODULE_2__.aJ)({angle,radius,defined,curve});return children?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children({path})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",_extends({ref:innerRef,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("visx-line-radial",className),d:path(data)||"",fill},restProps))}},"../../node_modules/lodash/isNull.js":module=>{module.exports=function isNull(value){return null===value}},"../../node_modules/lodash/negate.js":module=>{module.exports=function negate(predicate){if("function"!=typeof predicate)throw new TypeError("Expected a function");return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2])}return!predicate.apply(this,args)}}},"../../node_modules/lodash/omitBy.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIteratee=__webpack_require__("../../node_modules/lodash/_baseIteratee.js"),negate=__webpack_require__("../../node_modules/lodash/negate.js"),pickBy=__webpack_require__("../../node_modules/lodash/pickBy.js");module.exports=function omitBy(object,predicate){return pickBy(object,negate(baseIteratee(predicate)))}},"../../node_modules/lodash/set.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseSet=__webpack_require__("../../node_modules/lodash/_baseSet.js");module.exports=function set(object,path,value){return null==object?object:baseSet(object,path,value)}},"../../node_modules/swr/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>useSWR});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function __awaiter(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))}function __generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var hook,noop=function(){},UNDEFINED=noop(),OBJECT=Object,isUndefined=function(v){return v===UNDEFINED},isFunction=function(v){return"function"==typeof v},mergeObjects=function(a,b){return OBJECT.assign({},a,b)},hasWindow=function(){return"undefined"!=typeof window},table=new WeakMap,counter=0,stableHash=function(arg){var result,index,type=typeof arg,constructor=arg&&arg.constructor,isDate=constructor==Date;if(OBJECT(arg)!==arg||isDate||constructor==RegExp)result=isDate?arg.toJSON():"symbol"==type?arg.toString():"string"==type?JSON.stringify(arg):""+arg;else{if(result=table.get(arg))return result;if(result=++counter+"~",table.set(arg,result),constructor==Array){for(result="@",index=0;index<arg.length;index++)result+=stableHash(arg[index])+",";table.set(arg,result)}if(constructor==OBJECT){result="#";for(var keys=OBJECT.keys(arg).sort();!isUndefined(index=keys.pop());)isUndefined(arg[index])||(result+=index+":"+stableHash(arg[index])+",");table.set(arg,result)}}return result},online=!0,hasWin=hasWindow(),hasDoc="undefined"!=typeof document,onWindowEvent=hasWin&&window.addEventListener?window.addEventListener.bind(window):noop,onDocumentEvent=hasDoc?document.addEventListener.bind(document):noop,offWindowEvent=hasWin&&window.removeEventListener?window.removeEventListener.bind(window):noop,offDocumentEvent=hasDoc?document.removeEventListener.bind(document):noop,preset={isOnline:function(){return online},isVisible:function(){var visibilityState=hasDoc&&document.visibilityState;return isUndefined(visibilityState)||"hidden"!==visibilityState}},defaultConfigOptions={initFocus:function(callback){return onDocumentEvent("visibilitychange",callback),onWindowEvent("focus",callback),function(){offDocumentEvent("visibilitychange",callback),offWindowEvent("focus",callback)}},initReconnect:function(callback){var onOnline=function(){online=!0,callback()},onOffline=function(){online=!1};return onWindowEvent("online",onOnline),onWindowEvent("offline",onOffline),function(){offWindowEvent("online",onOnline),offWindowEvent("offline",onOffline)}}},IS_SERVER=!hasWindow()||"Deno"in window,rAF=function(f){return hasWindow()&&void 0!==window.requestAnimationFrame?window.requestAnimationFrame(f):setTimeout(f,1)},useIsomorphicLayoutEffect=IS_SERVER?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,navigatorConnection="undefined"!=typeof navigator&&navigator.connection,slowConnection=!IS_SERVER&&navigatorConnection&&(["slow-2g","2g"].includes(navigatorConnection.effectiveType)||navigatorConnection.saveData),serialize=function(key){if(isFunction(key))try{key=key()}catch(err){key=""}var args=[].concat(key);return[key="string"==typeof key?key:(Array.isArray(key)?key.length:key)?stableHash(key):"",args,key?"$swr$"+key:""]},SWRGlobalState=new WeakMap,broadcastState=function(cache,key,data,error,isValidating,revalidate,broadcast){void 0===broadcast&&(broadcast=!0);var _a=SWRGlobalState.get(cache),EVENT_REVALIDATORS=_a[0],STATE_UPDATERS=_a[1],FETCH=_a[3],revalidators=EVENT_REVALIDATORS[key],updaters=STATE_UPDATERS[key];if(broadcast&&updaters)for(var i=0;i<updaters.length;++i)updaters[i](data,error,isValidating);return revalidate&&(delete FETCH[key],revalidators&&revalidators[0])?revalidators[0](2).then((function(){return cache.get(key)})):cache.get(key)},__timestamp=0,getTimestamp=function(){return++__timestamp},internalMutate=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return __awaiter(void 0,void 0,void 0,(function(){var cache,_key,_data,_opts,options,populateCache,revalidate,rollbackOnError,optimisticData,_a,key,keyInfo,_b,MUTATION,data,error,beforeMutationTs,hasOptimisticData,rollbackData,res;return __generator(this,(function(_c){switch(_c.label){case 0:if(cache=args[0],_key=args[1],_data=args[2],_opts=args[3],populateCache=!!isUndefined((options="boolean"==typeof _opts?{revalidate:_opts}:_opts||{}).populateCache)||options.populateCache,revalidate=!1!==options.revalidate,rollbackOnError=!1!==options.rollbackOnError,optimisticData=options.optimisticData,_a=serialize(_key),key=_a[0],keyInfo=_a[2],!key)return[2];if(_b=SWRGlobalState.get(cache),MUTATION=_b[2],args.length<3)return[2,broadcastState(cache,key,cache.get(key),UNDEFINED,UNDEFINED,revalidate,!0)];if(data=_data,beforeMutationTs=getTimestamp(),MUTATION[key]=[beforeMutationTs,0],hasOptimisticData=!isUndefined(optimisticData),rollbackData=cache.get(key),hasOptimisticData&&(cache.set(key,optimisticData),broadcastState(cache,key,optimisticData)),isFunction(data))try{data=data(cache.get(key))}catch(err){error=err}return data&&isFunction(data.then)?[4,data.catch((function(err){error=err}))]:[3,2];case 1:if(data=_c.sent(),beforeMutationTs!==MUTATION[key][0]){if(error)throw error;return[2,data]}error&&hasOptimisticData&&rollbackOnError&&(populateCache=!0,data=rollbackData,cache.set(key,rollbackData)),_c.label=2;case 2:return populateCache&&(error||(isFunction(populateCache)&&(data=populateCache(data,rollbackData)),cache.set(key,data)),cache.set(keyInfo,mergeObjects(cache.get(keyInfo),{error}))),MUTATION[key][1]=getTimestamp(),[4,broadcastState(cache,key,data,error,UNDEFINED,revalidate,!!populateCache)];case 3:if(res=_c.sent(),error)throw error;return[2,populateCache?res:data]}}))}))},revalidateAllKeys=function(revalidators,type){for(var key in revalidators)revalidators[key][0]&&revalidators[key][0](type)},initCache=function(provider,options){if(!SWRGlobalState.has(provider)){var opts=mergeObjects(defaultConfigOptions,options),EVENT_REVALIDATORS={},mutate=internalMutate.bind(UNDEFINED,provider),unmount=noop;if(SWRGlobalState.set(provider,[EVENT_REVALIDATORS,{},{},{},mutate]),!IS_SERVER){var releaseFocus_1=opts.initFocus(setTimeout.bind(UNDEFINED,revalidateAllKeys.bind(UNDEFINED,EVENT_REVALIDATORS,0))),releaseReconnect_1=opts.initReconnect(setTimeout.bind(UNDEFINED,revalidateAllKeys.bind(UNDEFINED,EVENT_REVALIDATORS,1)));unmount=function(){releaseFocus_1&&releaseFocus_1(),releaseReconnect_1&&releaseReconnect_1(),SWRGlobalState.delete(provider)}}return[provider,mutate,unmount]}return[provider,SWRGlobalState.get(provider)[4]]},_a=initCache(new Map),cache=_a[0],mutate=_a[1],defaultConfig=mergeObjects({onLoadingSlow:noop,onSuccess:noop,onError:noop,onErrorRetry:function(_,__,config,revalidate,opts){var maxRetryCount=config.errorRetryCount,currentRetryCount=opts.retryCount,timeout=~~((Math.random()+.5)*(1<<(currentRetryCount<8?currentRetryCount:8)))*config.errorRetryInterval;!isUndefined(maxRetryCount)&&currentRetryCount>maxRetryCount||setTimeout(revalidate,timeout,opts)},onDiscarded:noop,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:slowConnection?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:slowConnection?5e3:3e3,compare:function(currentData,newData){return stableHash(currentData)==stableHash(newData)},isPaused:function(){return!1},cache,mutate,fallback:{}},preset),mergeConfigs=function(a,b){var v=mergeObjects(a,b);if(b){var u1=a.use,f1=a.fallback,u2=b.use,f2=b.fallback;u1&&u2&&(v.use=u1.concat(u2)),f1&&f2&&(v.fallback=mergeObjects(f1,f2))}return v},SWRConfigContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),normalize=function(args){return isFunction(args[1])?[args[0],args[1],args[2]||{}]:[args[0],null,(null===args[1]?args[2]:args[1])||{}]},useSWRConfig=function(){return mergeObjects(defaultConfig,(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SWRConfigContext))},subscribeCallback=function(key,callbacks,callback){var keyedRevalidators=callbacks[key]||(callbacks[key]=[]);return keyedRevalidators.push(callback),function(){var index=keyedRevalidators.indexOf(callback);index>=0&&(keyedRevalidators[index]=keyedRevalidators[keyedRevalidators.length-1],keyedRevalidators.pop())}},WITH_DEDUPE={dedupe:!0},useSWR=(OBJECT.defineProperty((function(props){var value=props.value,extendedConfig=mergeConfigs((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SWRConfigContext),value),provider=value&&value.provider,cacheContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return provider?initCache(provider(extendedConfig.cache||cache),value):UNDEFINED}))[0];return cacheContext&&(extendedConfig.cache=cacheContext[0],extendedConfig.mutate=cacheContext[1]),useIsomorphicLayoutEffect((function(){return cacheContext?cacheContext[2]:UNDEFINED}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SWRConfigContext.Provider,mergeObjects(props,{value:extendedConfig}))}),"default",{value:defaultConfig}),hook=function(_key,fetcher,config){var cache=config.cache,compare=config.compare,fallbackData=config.fallbackData,suspense=config.suspense,revalidateOnMount=config.revalidateOnMount,refreshInterval=config.refreshInterval,refreshWhenHidden=config.refreshWhenHidden,refreshWhenOffline=config.refreshWhenOffline,_a=SWRGlobalState.get(cache),EVENT_REVALIDATORS=_a[0],STATE_UPDATERS=_a[1],MUTATION=_a[2],FETCH=_a[3],_b=serialize(_key),key=_b[0],fnArgs=_b[1],keyInfo=_b[2],initialMountedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),unmountedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),keyRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(key),fetcherRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fetcher),configRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(config),getConfig=function(){return configRef.current},isActive=function(){return getConfig().isVisible()&&getConfig().isOnline()},patchFetchInfo=function(info){return cache.set(keyInfo,mergeObjects(cache.get(keyInfo),info))},cached=cache.get(key),fallback=isUndefined(fallbackData)?config.fallback[key]:fallbackData,data=isUndefined(cached)?fallback:cached,info=cache.get(keyInfo)||{},error=info.error,isInitialMount=!initialMountedRef.current,shouldRevalidate=function(){return isInitialMount&&!isUndefined(revalidateOnMount)?revalidateOnMount:!getConfig().isPaused()&&(suspense?!isUndefined(data):isUndefined(data)||config.revalidateIfStale)},isValidating=!(!key||!fetcher)&&(!!info.isValidating||isInitialMount&&shouldRevalidate()),_c=function(state,unmountedRef){var rerender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({})[1],stateRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state),stateDependenciesRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({data:!1,error:!1,isValidating:!1}),setState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(payload){var shouldRerender=!1,currentState=stateRef.current;for(var _ in payload){var k=_;currentState[k]!==payload[k]&&(currentState[k]=payload[k],stateDependenciesRef.current[k]&&(shouldRerender=!0))}shouldRerender&&!unmountedRef.current&&rerender({})}),[]);return useIsomorphicLayoutEffect((function(){stateRef.current=state})),[stateRef,stateDependenciesRef.current,setState]}({data,error,isValidating},unmountedRef),stateRef=_c[0],stateDependencies=_c[1],setState=_c[2],revalidate=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(revalidateOpts){return __awaiter(void 0,void 0,void 0,(function(){var currentFetcher,newData,startAt,loading,opts,shouldStartNewRequest,isCurrentKeyMounted,cleanupState,newState,finishRequestAndUpdateState,mutationInfo,err_1,_a;return __generator(this,(function(_b){switch(_b.label){case 0:if(currentFetcher=fetcherRef.current,!key||!currentFetcher||unmountedRef.current||getConfig().isPaused())return[2,!1];loading=!0,opts=revalidateOpts||{},shouldStartNewRequest=!FETCH[key]||!opts.dedupe,isCurrentKeyMounted=function(){return!unmountedRef.current&&key===keyRef.current&&initialMountedRef.current},cleanupState=function(){var requestInfo=FETCH[key];requestInfo&&requestInfo[1]===startAt&&delete FETCH[key]},newState={isValidating:!1},finishRequestAndUpdateState=function(){patchFetchInfo({isValidating:!1}),isCurrentKeyMounted()&&setState(newState)},patchFetchInfo({isValidating:!0}),setState({isValidating:!0}),_b.label=1;case 1:return _b.trys.push([1,3,,4]),shouldStartNewRequest&&(broadcastState(cache,key,stateRef.current.data,stateRef.current.error,!0),config.loadingTimeout&&!cache.get(key)&&setTimeout((function(){loading&&isCurrentKeyMounted()&&getConfig().onLoadingSlow(key,config)}),config.loadingTimeout),FETCH[key]=[currentFetcher.apply(void 0,fnArgs),getTimestamp()]),_a=FETCH[key],newData=_a[0],startAt=_a[1],[4,newData];case 2:return newData=_b.sent(),shouldStartNewRequest&&setTimeout(cleanupState,config.dedupingInterval),FETCH[key]&&FETCH[key][1]===startAt?(patchFetchInfo({error:UNDEFINED}),newState.error=UNDEFINED,mutationInfo=MUTATION[key],!isUndefined(mutationInfo)&&(startAt<=mutationInfo[0]||startAt<=mutationInfo[1]||0===mutationInfo[1])?(finishRequestAndUpdateState(),shouldStartNewRequest&&isCurrentKeyMounted()&&getConfig().onDiscarded(key),[2,!1]):(compare(stateRef.current.data,newData)?newState.data=stateRef.current.data:newState.data=newData,compare(cache.get(key),newData)||cache.set(key,newData),shouldStartNewRequest&&isCurrentKeyMounted()&&getConfig().onSuccess(newData,key,config),[3,4])):(shouldStartNewRequest&&isCurrentKeyMounted()&&getConfig().onDiscarded(key),[2,!1]);case 3:return err_1=_b.sent(),cleanupState(),getConfig().isPaused()||(patchFetchInfo({error:err_1}),newState.error=err_1,shouldStartNewRequest&&isCurrentKeyMounted()&&(getConfig().onError(err_1,key,config),("boolean"==typeof config.shouldRetryOnError&&config.shouldRetryOnError||isFunction(config.shouldRetryOnError)&&config.shouldRetryOnError(err_1))&&isActive()&&getConfig().onErrorRetry(err_1,key,config,revalidate,{retryCount:(opts.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return loading=!1,finishRequestAndUpdateState(),isCurrentKeyMounted()&&shouldStartNewRequest&&broadcastState(cache,key,newState.data,newState.error,!1),[2,!0]}}))}))}),[key]),boundMutate=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(internalMutate.bind(UNDEFINED,cache,(function(){return keyRef.current})),[]);if(useIsomorphicLayoutEffect((function(){fetcherRef.current=fetcher,configRef.current=config})),useIsomorphicLayoutEffect((function(){if(key){var keyChanged=key!==keyRef.current,softRevalidate=revalidate.bind(UNDEFINED,WITH_DEDUPE),nextFocusRevalidatedAt=0,unsubUpdate=subscribeCallback(key,STATE_UPDATERS,(function(updatedData,updatedError,updatedIsValidating){setState(mergeObjects({error:updatedError,isValidating:updatedIsValidating},compare(stateRef.current.data,updatedData)?UNDEFINED:{data:updatedData}))})),unsubEvents=subscribeCallback(key,EVENT_REVALIDATORS,(function(type){if(0==type){var now=Date.now();getConfig().revalidateOnFocus&&now>nextFocusRevalidatedAt&&isActive()&&(nextFocusRevalidatedAt=now+getConfig().focusThrottleInterval,softRevalidate())}else if(1==type)getConfig().revalidateOnReconnect&&isActive()&&softRevalidate();else if(2==type)return revalidate()}));return unmountedRef.current=!1,keyRef.current=key,initialMountedRef.current=!0,keyChanged&&setState({data,error,isValidating}),shouldRevalidate()&&(isUndefined(data)||IS_SERVER?softRevalidate():rAF(softRevalidate)),function(){unmountedRef.current=!0,unsubUpdate(),unsubEvents()}}}),[key,revalidate]),useIsomorphicLayoutEffect((function(){var timer;function next(){var interval=isFunction(refreshInterval)?refreshInterval(data):refreshInterval;interval&&-1!==timer&&(timer=setTimeout(execute,interval))}function execute(){stateRef.current.error||!refreshWhenHidden&&!getConfig().isVisible()||!refreshWhenOffline&&!getConfig().isOnline()?next():revalidate(WITH_DEDUPE).then(next)}return next(),function(){timer&&(clearTimeout(timer),timer=-1)}}),[refreshInterval,refreshWhenHidden,refreshWhenOffline,revalidate]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(data),suspense&&isUndefined(data)&&key)throw fetcherRef.current=fetcher,configRef.current=config,unmountedRef.current=!1,isUndefined(error)?revalidate(WITH_DEDUPE):error;return{mutate:boundMutate,get data(){return stateDependencies.data=!0,data},get error(){return stateDependencies.error=!0,error},get isValidating(){return stateDependencies.isValidating=!0,isValidating}}},function useSWRArgs(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var fallbackConfig=useSWRConfig(),_a=normalize(args),key=_a[0],fn=_a[1],_config=_a[2],config=mergeConfigs(fallbackConfig,_config),next=hook,use=config.use;if(use)for(var i=use.length;i-- >0;)next=use[i](next);return next(key,fn||config.fetcher,config)})},"../../node_modules/unstated-next/dist/unstated-next.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>createContainer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function createContainer(useHook){var Context=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);return{Provider:function Provider(props){var value=useHook(props.initialState);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value},props.children)},useContainer:function useContainer(){var value=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(null===value)throw new Error("Component must be wrapped with <Container.Provider>");return value}}}}}]);