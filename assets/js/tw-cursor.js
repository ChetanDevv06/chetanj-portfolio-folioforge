if ($("body").not(".is-mobile").hasClass("tw-magic-cursor")) {
  $(".tw-magnetic-item").wrap('<div class="tw-magnetic-wrap"></div>');

  if ($("a.tw-magnetic-item").length) {
    $("a.tw-magnetic-item").addClass("not-hide-cursor");
  }

  var $mouse = { x: 0, y: 0 }; // Cursor position
  var $pos = { x: 0, y: 0 }; // Cursor position
  var $ratio = 0.15; // delay follow cursor
  var $active = false;
  var $ball = $("#ball");

  var $ballWidth = 10;
  var $ballHeight = 10;
  var $ballScale = 1;
  var $ballOpacity = 1;
  var $ballBorderWidth = 1.5;

  gsap.set($ball, {
    // scale from middle and style ball
    xPercent: -50,
    yPercent: -50,
    width: $ballWidth,
    height: $ballHeight,
    borderWidth: $ballBorderWidth,
    opacity: $ballOpacity,
  });

  document.addEventListener("mousemove", mouseMove);

  function mouseMove(e) {
    $mouse.x = e.clientX;
    $mouse.y = e.clientY;
  }

  gsap.ticker.add(updatePosition);

  function updatePosition() {
    if (!$active) {
      $pos.x += ($mouse.x - $pos.x) * $ratio;
      $pos.y += ($mouse.y - $pos.y) * $ratio;

      gsap.set($ball, { x: $pos.x, y: $pos.y });
    }
  }

  // Show/hide magic cursor //

  // Keep custom cursor visible when hovering over interactive elements
  $("a, button, .tw-cart-minus, .tw-cart-plus")
      .not(".cursor-hide")
      .on("mouseenter", function () {
          gsap.to($ball, {
              duration: 0.2,
              scale: 1,
              opacity: 1,
          });
      })
      .on("mouseleave", function () {
          gsap.to($ball, {
              duration: 0.2,
              scale: $ballScale,
              opacity: $ballOpacity,
          });
      });


  // Show/hide on document leave/enter//
  $(document)
    .on("mouseleave", function () {
      gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
    })
    .on("mouseenter", function () {
      gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
    });

  // Show as the mouse moves//
  $(document).mousemove(function () {
    gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
  });

  // Cursor view on hover (data attribute "data-cursor="...").
  $("[data-cursor]").each(function () {
    $(this)
      .on("mouseenter", function () {
        $("#ball").addClass("with-blur");
        $ball.append('<div class="ball-view"></div>');
        $(".ball-view").append($(this).attr("data-cursor"));
        gsap.to($ball, {
          duration: 0.3,
          yPercent: -75,
          width: 140,
          height: 140,
          opacity: 1,
          borderWidth: 1,
          zIndex: 1,
          backdropFilter: "blur(14px)",
          backgroundColor: "#ff6644",
          boxShadow: "0px 1px 3px 0px rgba(18, 20, 32, 0.14)",
        });
        gsap.to(".ball-view", { duration: 0.3, scale: 1, autoAlpha: 1 });
      })
      .on("mouseleave", function () {
        gsap.to(ball, {
          duration: 0.3,
          yPercent: -50,
          width: $ballWidth,
          height: $ballHeight,
          opacity: $ballOpacity,
          borderWidth: $ballBorderWidth,
          backgroundColor: "#1c1d21",
        });
        gsap.to(".ball-view", {
          duration: 0.3,
          scale: 0,
          autoAlpha: 0,
          clearProps: "all",
        });
        $ball.find(".ball-view").remove();
      });
    $(this).addClass("not-hide-cursor");
  });
}
