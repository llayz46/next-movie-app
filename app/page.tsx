import Image from 'next/image';
import previewImage from '@/public/sicario_large.jpeg';
import { ListSection } from "@/src/components/ListSection";
import { Card } from "@/src/components/Card";

// TODO: Modifier les text-white
export default function Home() {
    return (
        <div className="flex flex-col gap-6">
            <Image src={previewImage} alt="Image preview" className="w-full aspect-12/5 object-cover rounded-lg border border-slate-950/10 dark:border-slate-50/20" />

            <ListSection title="Films Populaire">
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
            </ListSection>

            <ListSection title="Series Populaire">
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
                <Card variant={'large'} />
            </ListSection>
        </div>
    );
}
