import { Badge } from '@/components/ui/badge';

interface TechTagsProps {
  tags: string[];
  variant?: 'default' | 'accent';
}

export function TechTags({ tags, variant = 'default' }: TechTagsProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <Badge key={t} variant={variant}>
          {t}
        </Badge>
      ))}
    </div>
  );
}

interface KeywordTagsProps {
  tags: string[];
}

export function KeywordTags({ tags }: KeywordTagsProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <Badge key={t}>{t}</Badge>
      ))}
    </div>
  );
}
