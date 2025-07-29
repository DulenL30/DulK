import Spline from '@splinetool/react-spline/next';

export default function Robot() {
  return (
    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0">
      <Spline 
        scene="https://prod.spline.design/mOiWi0Aeao-JcI6T/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}