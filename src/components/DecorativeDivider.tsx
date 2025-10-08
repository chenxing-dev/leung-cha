import { type FC } from 'react';

/**
 * 垂直中式分隔線：端點 end_7x5.png，上下，中段 mid_7x12.png repeat-y。
 * 圖片路徑：/public/ui/end_7x5.png, /public/ui/mid_7x12.png
 */
export const DecorativeDivider: FC = () => {
    return (
        <div
            aria-hidden
            className="flex flex-col"
        >
            {/* Top end */}
            <img
                src="/ui/end_7x4.png"
                className="select-none"
                style={{ imageRendering: 'pixelated' }}
            />
            {/* Middle repeat-y section */}
            <div
                className='w-7'
                style={{
                    // width: '100%',
                    flex: 1,
                    backgroundImage: 'url(/ui/mid_7x12.png)',
                    imageRendering: 'pixelated',
                    backgroundRepeat: 'repeat-y',
                    backgroundSize: '100% auto',
                }}
            />
            {/* Bottom end (翻轉) */}
            <img
                src="/ui/end_7x4.png"
                className="select-none rotate-180"
                style={{ imageRendering: 'pixelated' }}
            />
        </div>
    );
};

export default DecorativeDivider;
