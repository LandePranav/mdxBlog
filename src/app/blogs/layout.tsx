import { MainNav } from "@/components/home/main-nav";
import { Container } from "@/components/ui/Container";

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <>
            <div className="bg-gray-100 dark:bg-gray-800">
                <Container>
                    <main>
                        <MainNav />
                    </main>
                </Container>
            </div>
            
            {children}
        </>
    );
}