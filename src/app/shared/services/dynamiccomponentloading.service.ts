import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  Type
} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DynamiccomponentloadingService {
  factoryResolver: any
  rootViewContainer: any
  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }
  addDynamicComponent(dynamicComponent: Type<any>) {
    const factory = this.factoryResolver
                        .resolveComponentFactory(dynamicComponent)
    const component = factory
      .create(this.rootViewContainer.parentInjector)
    this.rootViewContainer.insert(component.hostView)
  }
}
