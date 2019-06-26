import { Component, Element, Host, Method, State, h } from "@stencil/core";

import { nodeListToArray } from "calcite-components/dist/collection/utils/dom";

type FlowDirection = "advancing" | "retreating";

const CSS = {
  frame: "frame",
  frameAdvancing: "frame--advancing",
  frameRetreating: "frame--retreating"
};

@Component({
  tag: "calcite-flow",
  styleUrl: "calcite-flow.scss",
  shadow: true
})
export class CalciteFlow {
  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  @State() flowCount = 0;

  @State() flowDirection: FlowDirection = null;

  @State() flows: HTMLCalciteFlowItemElement[] = [];

  flowItemObserver = new MutationObserver(this.flowItemObserverCallback.bind(this));

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentDidLoad() {
    this.flowItemObserver.observe(this.el, { childList: true });
  }

  componentDidUnload() {
    this.flowItemObserver.disconnect();
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  @Method()
  async back(): Promise<void> {
    const lastItem = this.el.querySelector("calcite-flow-item:last-child");

    lastItem && lastItem.remove();
  }

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  flowItemObserverCallback(): void {
    const { flows } = this;

    const newFlows: HTMLCalciteFlowItemElement[] = nodeListToArray(
      this.el.querySelectorAll("calcite-flow-item")
    );

    const oldFlowCount = flows.length;
    const hadMultipleFlows = oldFlowCount > 1;
    const newFlowCount = newFlows.length;
    const hasMultipleFlows = newFlowCount > 1;

    const flowDirection =
      hasMultipleFlows || hadMultipleFlows
        ? newFlowCount < oldFlowCount
          ? "retreating"
          : "advancing"
        : null;

    const activeFlow = newFlows[newFlowCount - 1];

    if (newFlowCount && activeFlow) {
      newFlows.forEach((flowNode) => {
        flowNode.showBackButton = hasMultipleFlows;
        flowNode.hidden = flowNode !== activeFlow;
      });
    }

    this.flowDirection = flowDirection;
    this.flowCount = newFlowCount;
    this.flows = newFlows;
  }

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  render() {
    const { flowDirection, flowCount } = this;

    const flowDirectionClass =
      flowDirection === "advancing"
        ? CSS.frameAdvancing
        : flowDirection === "retreating"
        ? CSS.frameRetreating
        : "";

    return (
      <Host>
        <div key={flowCount} class={`${CSS.frame} ${flowDirectionClass}`}>
          <slot />
        </div>
      </Host>
    );
  }
}
