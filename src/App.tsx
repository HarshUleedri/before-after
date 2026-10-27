import BeforAfter from "./components/BeforeAfter";

const App = () => {
  return (
    <div className="bg-[radial-gradient(circle,#d9d9d9_1px,transparent_1px)] bg-size-[18px_18px] min-h-screen flex items-center justify-center">
      <BeforAfter
        beforeImage={
          "https://plus.unsplash.com/premium_photo-1683120832725-3cd19f90b48c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        }
        afterImage={
          "https://plus.unsplash.com/premium_photo-1676321688602-bc48f06f1d84?q=80&w=1236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        }
      />
    </div>
  );
};

export default App;
