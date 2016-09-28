import { Const } from '../const';
import { RasterTileLayer } from '../layer/rasterTileLayer';
import { FillLayer } from '../layer/fillLayer';
import { LineLayer } from '../layer/lineLayer';
import { PointLayer } from '../layer/pointLayer';
import { CircleLayer } from '../layer/circleLayer';
import { CircleFillLayer } from '../layer/circleFillLayer';
import { Source } from './source';

export class SourceLayer {
    static create(view, layerOptions) {
        const source = Source.valueOf(layerOptions.source);
        if (!source) {
            return undefined;
        }

        if (layerOptions.type === Const.LayerType.RASTER_TILE) {
            return new RasterTileLayer({
                source,
                view
            });
        } else if (layerOptions.type === Const.LayerType.LINE) {
            return new LineLayer({
                source,
                view
            });
        } else if (layerOptions.type === Const.LayerType.FILL) {
            return new FillLayer({
                source,
                view
            });
        } else if (layerOptions.type === Const.LayerType.POINT) {
            return new PointLayer({
                source,
                view
            });
        } else if (layerOptions.type === Const.LayerType.CIRCLE) {
            return new CircleLayer({
                source,
                view
            });
        } else if (layerOptions.type === Const.LayerType.CIRCLE_FILL) {
            return new CircleFillLayer({
                source,
                view
            });
        }

        return null;
    }
}
