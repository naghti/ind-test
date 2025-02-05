export default function ServicesHeader({index}) {
    return (
        <>
           <section className="w-full border-b border-gray-200 px-2 py-4">
            <div className="mx-auto flex flex-col sm:flex-row justify-between items-start ">
                <h2>{index+1}.0</h2>
                <h2 className="hidden sm:block ">Наши услуги</h2>
                <h2 className="">
                </h2>
            </div>
        </section>
        <h2 className="block sm:hidden px-2 py-2">Наши услуги</h2>

        </>
   
    );
  }
  