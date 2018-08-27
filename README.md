This is the boilerplate code for service providers and clients to communicate with the [service broker](https://github.com/ken107/service-broker)

### Configuration
The `serviceBrokerAddress` property in `config.ts` specifies the service broker's address.

### API
These API methods are exposed by the `common/service-broker` module.

#### Advertise
```typescript
function advertise(serviceName: string, capabilities: string[], priority: number, handler: (req: Message) => Message|Promise<Message>): void
```
A service provider calls this method to advertise to the broker the service(s) it provides.  For explanation of parameters, see [service broker](https://github.com/ken107/service-broker).

#### Request
```typescript
function request(serviceName: string, capabilities: string[], req: Message, timeout?: number): Promise<Message>
```
A client calls this method to request some service.  The broker will select a qualified service provider based on `serviceName` and `capabilities`.  `req` contains the actual message to the provider (see `handler` in Advertise).  The returned promise will resolve to the response from the provider.

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
