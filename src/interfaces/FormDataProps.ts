import { BrandProps } from './BrandProps';

export interface FormDataProps {
    campaignDate: Date;
    heroImage: string;
    heroBackgroundHeight: number|null;
    heroTextCta: string;
    heroHeaderRelativeUrl: string;
    templateType: string;
    bodyImage: string;
    bodyTextCta: string;
    bodyRelativeUrl: string;
    brands: BrandProps[]
}