\# Accessibility Notes: Manual Components vs shadcn/ui



\## 1. Dialog / Modal



My manual modal required me to implement focus management myself.



I manually:

\- Found focusable elements inside the modal.

\- Moved focus into the modal when it opened.

\- Trapped Tab and Shift+Tab inside the modal.

\- Added Escape-key handling.

\- Stored the trigger button in a ref so focus could return to it after closing.



The shadcn Dialog uses the Base UI Dialog primitive, which handles these accessibility behaviors for the dialog. This means less custom keyboard and focus-management code is required.



The shadcn version also provides dedicated `DialogTitle` and `DialogDescription` components instead of requiring me to manually connect IDs with `aria-labelledby` and `aria-describedby`.



\## 2. Tabs



My manual tabs required custom keyboard logic.



I manually implemented:

\- ArrowRight and ArrowLeft navigation.

\- Home and End navigation.

\- Roving tabIndex.

\- Focus movement between tabs.

\- aria-selected.

\- aria-controls.

\- aria-labelledby.



The shadcn Tabs component uses the Base UI Tabs primitive, which handles the tab interaction and accessibility behavior. It also separates the component into reusable parts such as Tabs, TabsList, TabsTrigger, and TabsContent.



This reduces the amount of accessibility behavior that I have to maintain manually.



\## 3. Disclosure



My manual Disclosure is intentionally simple. It uses a button with aria-expanded and aria-controls to show and hide content.



Unlike the Dialog and Tabs components, I did not use a shadcn Disclosure primitive. This showed me that simple accessible patterns can sometimes be implemented directly with native HTML and ARIA attributes, while more complex widgets such as dialogs and tabs require more careful keyboard and focus management.



\## What I learned



Building the components manually helped me understand how accessibility works instead of treating it as something provided automatically by a library.



The main gaps in my manual implementation were the amount of custom focus and keyboard-management code required for the Dialog and Tabs. shadcn/Base UI provides these behaviors through reusable primitives, reducing the amount of accessibility logic that I need to write and maintain myself.

