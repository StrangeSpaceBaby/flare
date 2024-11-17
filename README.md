## Flare

![Static Badge](https://img.shields.io/badge/version-1.0--alpha-blue)  
![GitHub License](https://img.shields.io/github/license/StrangeSpaceBaby/flare)  
![GitHub Discussions](https://img.shields.io/github/discussions/StrangeSpaceBaby/flare)  
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/StrangeSpaceBaby/flare)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-closed/StrangeSpaceBaby/flare)  
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/StrangeSpaceBaby/flare)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr-closed/StrangeSpaceBaby/flare)  
![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/StrangeSpaceBaby/flare/total)  
![GitHub Repo stars](https://img.shields.io/github/stars/StrangeSpaceBaby/flare)
![GitHub watchers](https://img.shields.io/github/watchers/StrangeSpaceBaby/flare)  

Flare is a Javascript frontend API coordination platform. A set of independent but interoperable javascript classes, Flare allows you to easily manage remote APIs and coordinate their inclusion in your application's frontend. Flare can be used alongside other frontend frameworks without worrying whether or not it will increase memory footprint, interfere with your shadow DOM or generally interact negatively.

Flare has been spun off into a separate repository to allow for more atomic updates to it independent of Sky, the PHP API backend framework. One of Flare's main goals is to be able to work with many APIs, even if those APIs are not Sky-based. Today, Flare relies on Sky heavily for conventions but will be continually updated to be more independent so that it can work within the API ecosystem.

### Requirements

Flare. That's it.

### Under Heavy Development

Flare is undergoing heavy development to remove dependency on jQuery and to be spun off into its own separate repository to allow for separate releases from Sky.

### SASEX - Stateful Annotation, Single EXecution

* Your application is its state
* Your application is expressed in HTML via stateful annotations in attributes and classes
* Application manipulation occurs when a user takes action or a javascript event is triggered
* Programmatic actions are stateless
* Programmatic actions leave behind stateful annotations for future execution and reporting
* Programmatic actions perform one purpose via one class
* Classes read state, execute accordingly and exit meaningfully to reduce memory footprint and avoid memory leaks

### Javascript Classes

A flare is shot once into the sky, burns bright and then fades away. Flares are javascript classes that know the stateful annotations needed to read (and set) to perform its actions and leave stateful artifacts for itself and other flares. Using javascript classes has distinct advantages over other frameworks that use a core, memory resident application that has to stay on top of all state changes and modules and act accordingly.

* Each flare only needs to know about itself and its context
* Javascript classes enforce better coding practices
* Failures are atomic, successes are general
* Flares can call other flares intentfully
* Flares can recover at the very next execution without requiring a reload of the entire ecosystem or tree shaking
* Flares can be easily extended using inheritance or composition without having to coordinate with the larger application context

Learn more about Flare by going to [getskyflare.com](https://www.getskyflare.com/#flare_concepts)
