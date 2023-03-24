import * as htmlToImage from 'html-to-image';

export async function chartToImage(elementId: string){
  const chartElement = document.getElementById(elementId);

  const response = await htmlToImage.toPng(chartElement);

  return response;
}