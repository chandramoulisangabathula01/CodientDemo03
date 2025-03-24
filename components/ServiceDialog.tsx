'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

interface ServiceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
    imagePath: string;
  };
}

const ServiceDialog = ({ isOpen, onClose, service }: ServiceDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="text-brand-red">{service.icon}</div>
            <DialogTitle className="text-2xl">{service.title}</DialogTitle>
          </div>
        </DialogHeader>
        <div className="relative w-full h-[300px] my-4 rounded-lg overflow-hidden">
          <Image
            src={service.imagePath}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-gray-600">{service.description}</p>
        <DialogFooter className="mt-6">
          <Button
            className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;