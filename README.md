This is the boilerplate code for service providers and clients to communicate with the [service broker](https://github.com/service-broker/service-broker).

### Configuration
The `serviceBrokerUrl` property in `config.ts` specifies the broker's websocket URL.

### Calling the Service Broker
```typescript
import sb from "./common/service-broker"

const response = await sb.request({
  name: "my-storage",
  capabilities: ["v1"]
}, {
  header: {
    method: "persist",
    contentType: "audio/mpeg"
  },
  payload: myAudioBuffer
})
```
Refer to [service-broker-client](https://github.com/service-broker/service-broker-client) for the full API documentation.
