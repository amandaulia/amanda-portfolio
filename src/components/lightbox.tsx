// @ts-nocheck
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

export function ImageLightbox({ open, onClose, slides, index = 0, onIndexChange }: any) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={slides}
      index={index}
      on={{ view: ({ index: i }) => onIndexChange?.(i) }}
      plugins={[Zoom, Counter]}
      zoom={{
        maxZoomPixelRatio: 5,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        pinchZoomDistanceFactor: 100,
        scrollToZoom: true,
      }}
      carousel={{ finite: slides?.length <= 1 }}
      controller={{ closeOnBackdropClick: true }}
      animation={{ swipe: 250 }}
      styles={{ container: { backgroundColor: "rgba(15, 18, 28, 0.92)" } }}
    />
  );
}
