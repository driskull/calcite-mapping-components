import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

import { chevronLeft16, ellipsis16 } from "@esri/calcite-ui-icons";

import classnames from "classnames";

import { CSS, TEXT } from "./resources";
import CalciteIcon from "../_support/CalciteIcon";

import { CalciteTheme } from "../interfaces";

@Component({
  tag: "calcite-flow-item",
  styleUrl: "calcite-flow-item.scss",
  shadow: true
})
export class CalciteFlowItem {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Heading text.
   */
  @Prop() heading: string;

  /**
   * Opens the action menu.
   */
  @Prop({ reflect: true }) menuOpen = false;

  /**
   * Shows a back button in the header.
   */
  @Prop() showBackButton = false;

  /**
   * 'Back' text string.
   */
  @Prop() textBack = TEXT.back;

  /**
   * 'Close' text string.
   */
  @Prop() textClose = TEXT.close;

  /**
   * 'Open' text string.
   */
  @Prop() textOpen = TEXT.open;

  /**
   * Element styling
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the back button has been clicked.
   */

  @Event() calciteFlowItemBackClick: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  toggleMenuOpen = (): void => {
    this.menuOpen = !this.menuOpen;
  };

  backButtonClick = (): void => {
    this.calciteFlowItemBackClick.emit();
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderBackButton() {
    const { showBackButton, textBack } = this;

    return showBackButton ? (
      <calcite-action
        key="back-button"
        aria-label={textBack}
        text={textBack}
        class={CSS.backButton}
        onClick={this.backButtonClick}
      >
        <CalciteIcon size="16" path={chevronLeft16} />
      </calcite-action>
    ) : null;
  }

  renderMenuButton() {
    const { menuOpen, textOpen, textClose } = this;

    const menuLabel = menuOpen ? textClose : textOpen;

    return (
      <calcite-action
        class={CSS.menuButton}
        aria-label={menuLabel}
        text={menuLabel}
        onClick={this.toggleMenuOpen}
      >
        <CalciteIcon size="16" path={ellipsis16} />
      </calcite-action>
    );
  }

  renderMenuActions() {
    const { menuOpen } = this;

    return (
      <div class={classnames(CSS.menu, { [CSS.menuOpen]: menuOpen })}>
        <slot name="menu-actions" />
      </div>
    );
  }

  renderFooterActions() {
    const hasFooterActions = !!this.el.querySelector("[slot=footer-actions]");

    return hasFooterActions ? (
      <footer class={CSS.footer}>
        <slot name="footer-actions" />
      </footer>
    ) : null;
  }

  renderSingleActionContainer() {
    return (
      <div class={CSS.singleActionContainer}>
        <slot name="menu-actions" />
      </div>
    );
  }

  renderMenuActionsContainer() {
    return (
      <div class={CSS.menuContainer}>
        {this.renderMenuButton()}
        {this.renderMenuActions()}
      </div>
    );
  }

  renderHeaderActions() {
    const menuActionsNode = this.el.querySelector("[slot=menu-actions]");
    const hasMenuActions = !!menuActionsNode;
    const actionCount = hasMenuActions ? menuActionsNode.childElementCount : 0;

    return actionCount === 1
      ? this.renderSingleActionContainer()
      : hasMenuActions
      ? this.renderMenuActionsContainer()
      : null;
  }

  render() {
    const headingClasses = {
      [CSS.heading]: true,
      [CSS.headingFirst]: !this.showBackButton
    };
    const headerNode = (
      <header class={CSS.header}>
        {this.renderBackButton()}
        <h2 class={classnames(headingClasses)}>{this.heading}</h2>
        {this.renderHeaderActions()}
      </header>
    );

    const contentContainerNode = (
      <section class={CSS.contentContainer}>
        <slot />
      </section>
    );

    return (
      <Host>
        <article class={CSS.container}>
          {headerNode}
          {contentContainerNode}
          {this.renderFooterActions()}
        </article>
      </Host>
    );
  }
}
