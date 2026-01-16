(function () {
  "use strict";

  function tryRenderMermaid(root) {
    try {
      var mermaid = window.mermaid;
      if (!mermaid) return;

      var nodes = root.querySelectorAll(".mermaid");
      if (!nodes || nodes.length === 0) return;

      // Mermaid v10+
      if (typeof mermaid.run === "function") {
        mermaid.run({ nodes: nodes });
        return;
      }

      // Mermaid v8/v9 fallback
      if (typeof mermaid.init === "function") {
        mermaid.init(undefined, nodes);
      }
    } catch (e) {
      // Intentionally swallow: we prefer a non-breaking modal over hard failures.
    }
  }

  function initDiagramModals() {
    var triggers = document.querySelectorAll("[data-diagram-target]");
    triggers.forEach(function (trigger) {
      if (trigger.dataset.diagramBound === "1") return;
      trigger.dataset.diagramBound = "1";

      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        var targetId = trigger.getAttribute("data-diagram-target");
        if (!targetId) return;

        var dialog = document.getElementById(targetId);
        if (!dialog || typeof dialog.showModal !== "function") return;

        dialog.showModal();
        if (dialog.dataset.mermaidRendered !== "1") {
          tryRenderMermaid(dialog);
          dialog.dataset.mermaidRendered = "1";
        }
      });
    });

    var dialogs = document.querySelectorAll("dialog.diagram-modal");
    dialogs.forEach(function (dialog) {
      if (dialog.dataset.diagramDialogBound === "1") return;
      dialog.dataset.diagramDialogBound = "1";

      var closeBtn = dialog.querySelector("[data-diagram-close]");
      if (closeBtn) {
        closeBtn.addEventListener("click", function () {
          dialog.close();
        });
      }

      // Click backdrop (outside the dialog box) closes.
      dialog.addEventListener("click", function (event) {
        if (event.target === dialog) dialog.close();
      });
    });
  }

  if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(initDiagramModals);
  } else {
    document.addEventListener("DOMContentLoaded", initDiagramModals);
  }
})();
