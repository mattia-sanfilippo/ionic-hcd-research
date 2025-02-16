import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'accessibility',
    loadComponent: () => import('./accessibility/accessibility.page').then((m) => m.AccessibilityPage),
  },
  {
    path: 'accessibility/screen-reader-support',
    loadComponent: () => import('./accessibility/screen-reader-support/screen-reader-support.page').then((m) => m.ScreenReaderSupportPage),
  },
  {
    path: 'accessibility/semantic-elements-and-aria-roles',
    loadComponent: () => import('./accessibility/semantic-elements-and-aria-roles/semantic-elements-and-aria-roles.page').then((m) => m.SemanticElementsAndAriaRolesPage),
  },
  {
    path: 'accessibility/dynamic-text-scaling',
    loadComponent: () => import('./accessibility/dynamic-text-scaling/dynamic-text-scaling.page').then((m) => m.DynamicTextScalingPage),
  },
  {
    path: 'accessibility/contrast-and-color-inversion',
    loadComponent: () => import('./accessibility/contrast-and-color-inversion/contrast-and-color-inversion.page').then((m) => m.ContrastAndColorInversionPage),
  },
  {
    path: 'accessibility/keyboard-navigation',
    loadComponent: () => import('./accessibility/keyboard-navigation/keyboard-navigation.page').then((m) => m.KeyboardNavigationPage),
  },
  {
    path: 'accessibility/focus-management',
    loadComponent: () => import('./accessibility/focus-management/focus-management.page').then((m) => m.FocusManagementPage),
  },
  {
    path: 'ui-customization',
    loadComponent: () => import('./ui-customization/ui-customization.page').then((m) => m.UiCustomizationPage),
  },
  {
    path: 'ui-customization/global-theming-support',
    loadComponent: () => import('./ui-customization/global-theming-support/global-theming-support.page').then((m) => m.GlobalThemingSupportPage),
  },
  {
    path: 'ui-customization/dark-mode-support',
    loadComponent: () => import('./ui-customization/dark-mode-support/dark-mode-support.page').then((m) => m.DarkModeSupportPage),
  },
  {
    path: 'ui-customization/component-styling-flexibility',
    loadComponent: () => import('./ui-customization/component-styling-flexibility/component-styling-flexibility.page').then((m) => m.ComponentStylingFlexibilityPage),
  },
  {
    path: 'ui-customization/platform-consistency-vs-adaptation',
    loadComponent: () => import('./ui-customization/platform-consistency-vs-adaptation/platform-consistency-vs-adaptation.page').then((m) => m.PlatformConsistencyVsAdaptationPage),
  },
  {
    path: 'user-feedback-handling',
    loadComponent: () => import('./user-feedback-handling/user-feedback-handling.page').then((m) => m.UserFeedbackHandlingPage),
  },
  {
    path: 'user-feedback-handling/toast-messages-and-snackbars',
    loadComponent: () => import('./user-feedback-handling/toast-messages-and-snackbars/toast-messages-and-snackbars.page').then((m) => m.ToastMessagesAndSnackbarsPage),
  },
  {
    path: 'user-feedback-handling/loading-indicators',
    loadComponent: () => import('./user-feedback-handling/loading-indicators/loading-indicators.page').then((m) => m.LoadingIndicatorsPage),
  },
  {
    path: 'user-feedback-handling/error-message-handling',
    loadComponent: () => import('./user-feedback-handling/error-message-handling/error-message-handling.page').then((m) => m.ErrorMessageHandlingPage),
  },
  {
    path: 'user-feedback-handling/haptic-feedback',
    loadComponent: () => import('./user-feedback-handling/haptic-feedback/haptic-feedback.page').then((m) => m.HapticFeedbackPage),
  },
  {
    path: 'touch-gestures',
    loadComponent: () => import('./touch-gestures/touch-gestures.page').then((m) => m.TouchGesturesPage),
  },
  {
    path: 'touch-gestures/basic-tap-gestures',
    loadComponent: () => import('./touch-gestures/basic-tap-gestures/basic-tap-gestures.page').then((m) => m.BasicTapGesturesPage),
  },
  {
    path: 'touch-gestures/swipe-gestures',
    loadComponent: () => import('./touch-gestures/swipe-gestures/swipe-gestures.page').then((m) => m.SwipeGesturesPage),
  },
  {
    path: 'touch-gestures/drag-and-drop',
    loadComponent: () => import('./touch-gestures/drag-and-drop/drag-and-drop.page').then((m) => m.DragAndDropPage),
  },
  {
    path: 'touch-gestures/pinch-to-zoom',
    loadComponent: () => import('./touch-gestures/pinch-to-zoom/pinch-to-zoom.page').then((m) => m.PinchToZoomPage),
  },
  {
    path: 'internationalization',
    loadComponent: () => import('./internationalization/internationalization.page').then((m) => m.InternationalizationPage),
  },
  {
    path: 'internationalization/multi-language-support',
    loadComponent: () => import('./internationalization/multi-language-support/multi-language-support.page').then((m) => m.MultiLanguageSupportPage),
  },
  {
    path: 'internationalization/right-to-left-layout',
    loadComponent: () => import('./internationalization/right-to-left-layout/right-to-left-layout.page').then((m) => m.RightToLeftLayoutPage),
  },
  {
    path: 'internationalization/number-date-currency-formatting',
    loadComponent: () => import('./internationalization/number-date-currency-formatting/number-date-currency-formatting.page').then((m) => m.NumberDateCurrencyFormattingPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
