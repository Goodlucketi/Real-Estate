const PropertyFilter = () => {
    return ( 
        <main className="p-4">
            <div className="filter-search bg-slate-50/90 p-2 md:p-4 shadow-lg rounded-md">
                <form className="md:flex items-center p-2 md:p-4">
                    <div className="mx-3 my-2 md:w-4/12">
                        <select name="category" id="category" className="p-3 rounded-md border w-full">
                            <option value="single-room">Single Room</option>
                            <option value="self-contained">Sefl Containeed</option>
                            <option value="one-room-flat-room">1 Bedroom Flat</option>
                            <option value="two-room-flat">2 Bedroom Flat</option>
                            <option value="three-room-flat">3 Bedroom Flat</option>
                            <option value="duplex">Duplex</option>
                        </select>
                    </div>
                    <div className="mx-3 my-2 md:w-4/12">
                        <input type="text" name="location" id="location" placeholder="Location" className="p-3 rounded-md border w-full" />
                    </div>
                    <div className="mx-3 md:w-4/12">
                        <input type="submit" value="Search" className="p-3 rounded-md text-white w-full bg-blue-700" />
                    </div>
                </form>
            </div>
        </main>
     );
}
 
export default PropertyFilter;