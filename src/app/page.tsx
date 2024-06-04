import VacationHistory from "@/components/VacationHistory/VacationHistory";
import Statistic from "@/components/Statistic/Statistic";
import Header from '@/components/Header/Header';
import MainInformation from "@/components/Main-information/Main-information";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <MainInformation />
                <section className="flex flex-col md:flex-row gap-4">
                    <Statistic />
                    <VacationHistory />
                </section>
            </main>
        </>
    );
}