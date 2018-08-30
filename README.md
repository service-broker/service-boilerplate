This is the boilerplate code for service providers and clients to communicate with the [service broker](https://github.com/ken107/service-broker).

### Configuration
The `serviceBrokerUrl` property in `config.ts` specifies the broker's websocket URL.

### Service Broker API
These API methods are exposed by the `common/service-broker` module.

#### Advertise
```typescript
function advertise(
  service: {name: string, capabilities?: string[], priority?: number},
  handler: (req: Message) => Message|Promise<Message>
): void
```
A service provider calls this method to advertise to the broker the service(s) it provides.  For explanation of parameters, see [service broker](https://github.com/ken107/service-broker).

#### Request
```typescript
function request(
  service: {name: string, capabilities?: string[]},
  req: Message,
  timeout?: number
): Promise<Message>
```
A client calls this method to request some service.  The broker will select a qualified provider based on `serviceName` and `capabilities`.  The parameter `req` contains the actual message that'll be delivered to the service provider (see `handler` in Advertise).  The returned promise contains the response from the provider.

#### Publish/Subscribe
```typescript
function publish(topic: string, text: string)
function subscribe(topic: string, handler: (text: string) => void)
```
These two are self-explanatory.

#### Status
```typescript
function status()
```
Returns the service broker's status, which includes the list of services and service providers currently active.

#### Shutdown
```typescript
function shutdown()
```
Close the connection to the service broker.

#### SetHandler
```typescript
function setHandler(
  serviceName: string,
  handler: (req: Message) => Message|Promise<Message>
): void
```
This installs a handler for a particular service without advertising the it to the service broker.  This works for the case where the client knows the provider's endpointId and can send the request to it directly (see RequestTo and NotifyTo).

#### RequestTo
```typescript
function requestTo(
  endpointId: string,
  serviceName: string,
  req: Message,
  timeout?: number
): Promise<Message>
```
Send a request directly to an endpoint.

#### NotifyTo
```typescript
function notifyTo(
  endpointId: string,
  serviceName: string,
  msg: Message
): void
```
Send a notification directly to an endpoint.
