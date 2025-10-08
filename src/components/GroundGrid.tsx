/**
 * 地面透視格線與背景
 * - 地平線 y=66
 * - 地面底部 y=96
 * - 透視消失點 x=24, y=0
 * - 垂直線數量 n
 * - 透視線與頂部垂直線精確對齊
 */
import React from 'react';


const BOTTOM_Y = 96;
const TOP_Y = 0;
const HORIZON_Y = 66; // 地平線 y 座標
const PERSPECTIVE_X = 22; // 透視消失點 x 座標
const VERTICAL_LINE_COUNT = 9; // 垂直線數量

export const GroundGrid: React.FC = () => {
    // 以底部均分 x，計算每條透視線
    const bottomXs = Array.from({ length: VERTICAL_LINE_COUNT }, (_, i) => -16 + (152 * i) / (VERTICAL_LINE_COUNT - 1));

    // 每條透視線在地平線的交點 x
    // 公式：
    // (x - PERSPECTIVE_X) / (BOTTOM_Y - TOP_Y) = (xb - PERSPECTIVE_X) / (BOTTOM_Y - TOP_Y)
    // x = PERSPECTIVE_X + (xb - PERSPECTIVE_X) * (HORIZON_Y - TOP_Y) / (BOTTOM_Y - TOP_Y)
    const horizonXs = bottomXs.map(xb => PERSPECTIVE_X + (xb - PERSPECTIVE_X) * (HORIZON_Y - TOP_Y) / (BOTTOM_Y - TOP_Y));

    // 水平線 y 座標
    const horizontals = Array.from({ length: 6 }, (_, i) => HORIZON_Y + ((BOTTOM_Y - HORIZON_Y) * i) / 5);

    // Square grid config
    const GRID_TOP = TOP_Y;
    const GRID_BOTTOM = HORIZON_Y;
    const GRID_LEFT = 0;
    const GRID_RIGHT = 100;
    const SQUARE_SIZE = 12; // px in SVG units
    // 橫線 y 座標（從下往上，第零條在最下方）
    const gridH = Array.from({ length: Math.floor((GRID_BOTTOM - GRID_TOP) / SQUARE_SIZE) + 1 }, (_, i) => GRID_BOTTOM - i * SQUARE_SIZE);

    return (
        <>
            {/* 透視格線 SVG */}
            <div className="absolute bottom-0 w-full h-full bg-warm-gold">
                <svg width="100%" height="100%" viewBox={`0 0 100 ${BOTTOM_Y}`} preserveAspectRatio="none" className="absolute inset-0">
                    {/* Square grid background */}
                    <rect x={GRID_LEFT} y={GRID_TOP} width={GRID_RIGHT - GRID_LEFT} height={GRID_BOTTOM - GRID_TOP} fill="var(--color-parchment)" />
                    {/* Square grid horizontal lines */}
                    {gridH.map((y, i) => (
                        <line key={`sqh${i}`} x1={GRID_LEFT} y1={y} x2={GRID_RIGHT} y2={y} stroke="var(--color-sandalwood)" strokeWidth="1" />
                    ))}
                    {/* 垂直線（頂部） */}
                    {horizonXs.map((x, i) => (
                        <line key={`vtop${i}`} x1={x} y1={TOP_Y} x2={x} y2={HORIZON_Y} stroke="var(--color-sandalwood)" strokeWidth="0.7" />
                    ))}
                    {/* 水平線（地面透視） */}
                    {horizontals.map((y, i) => (
                        <line key={`h${i}`} x1={0} y1={y} x2={100} y2={y} stroke="var(--color-bamboo-scroll)" strokeWidth="0.7" />
                    ))}
                    {/* 透視線（地面）：只畫地平線到地面底部 */}
                    {bottomXs.map((xb, i) => (
                        <line
                            key={`persp${i}`}
                            x1={horizonXs[i]}
                            y1={HORIZON_Y}
                            x2={xb}
                            y2={BOTTOM_Y}
                            stroke="var(--color-bamboo-scroll)"
                            strokeWidth="0.7"
                        />
                    ))}
                </svg>
            </div>
        </>
    );
};

export default GroundGrid;
