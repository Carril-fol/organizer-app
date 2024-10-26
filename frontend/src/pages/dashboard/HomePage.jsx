import FolderTaskContainer from "../../components/dashboard/container/FolderTaskContainer";

const HomePage = () => {
    return(
        <section className="w-screen h-screen flex justify-center items-center">
            <div className="w-3/5">
                <FolderTaskContainer />
            </div>
        </section>
    );
}
export default HomePage;